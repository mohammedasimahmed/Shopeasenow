import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/Config.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import userRoutes from "./routes/UserRoutes.js";
import cartRoutes from "./routes/cartRoutes.js"
import otpRoutes from "./routes/OtpRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import multer from "multer";
import { createProduct } from "./controllers/Product.js";
import { updateImage } from "./controllers/Auth.js";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
/*Cookie-parser */
app.use(cookieParser());
/* logs */
app.use(logger);
/*adding the helmet middleware */
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
/*adds another 15 middleware and protects from common cross site threats*/
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev")); //logs the requests with some information
app.use(express.urlencoded({ extended: true })); // Handle form data
app.use(
  cors({
    origin: ["http://localhost:5173", "https://soul-share.vercel.app"],
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

/* Setting up the multer storage and the multer to upload the images */
const storage = multer.memoryStorage();
const upload = multer({ storage });

function multerErrorHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    // Handle multer errors here
    res.status(400).json({ message: "Multer error: " + err.message });
  } else {
    // Pass other errors to the global error handler
    next(err);
  }
}
app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
/* Routes */
app.post("/api/auth/updateImage/:id", upload.single("image"), updateImage);
app.post("/api/auth/product/:id", upload.single("productImage"), createProduct);
app.use("/api/auth", userRoutes);
app.use("/api/auth/otp", otpRoutes);
app.use("/api/product/", productRoutes);
app.use("/api/cart/", cartRoutes);
app.use(multerErrorHandler);

// app.post("/api/createProduct", upload.single("image"), createProduct);
/* Error Handler */
app.use(errorHandler);
const port = process.env.PORT || 5050;
//running the server

const socketToRooms = new Map();

io.on("connection", (socket) => {
  console.log("Connected with client");
  socket.on("join_room", (room) => {
    socket.join(room);
    socketToRooms.set(socket.id, room);
    socket.to(room).emit("new_user", socket.id);
    console.log("joined room " + room);
  });
  socket.on("leave_room", (room) => {
    socket.leave(room);
    socket.to(socketToRooms.get(socket.id)).emit("user_left", socket.id);
    socketToRooms.delete(socket.id);
  });
  socket.on("disconnect", () => {
    console.log(socket.id + " left");
    socket.to(socketToRooms.get(socket.id)).emit("user_left", socket.id);
    socketToRooms.delete(socket.id);
  });
});

server.listen(port, () =>
  console.log(`🚀 server at http://localhost:${port}.`)
);
/*Connecting the database */
connectDB();
