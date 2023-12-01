import User from "../models/Users.js";

export default async function getAllUsers(req, res) {
    // Use the appropriate method from the User model to retrieve all users
  try {
    const users = await User.find({});
    // Return the list of users as a response
    return res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
