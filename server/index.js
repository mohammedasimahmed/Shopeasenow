import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/Config.js";

/*Creating an Express Instance*/
const app = express();

app.use(express.json());
/*Cookie-parser */
app.use(cookieParser());
/*adding the helmet middleware */
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
/*adds another 15 middleware and protects from common cross site threats*/
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev")); //logs the requests with some information
app.use(express.urlencoded({ extended: true })); // Handle form data
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  })
})
const port = process.env.PORT || 5050;
//running the server
app.listen(port, () => console.log(`🚀 server at http://localhost:${port}.`));
/*Connecting the database */
connectDB();