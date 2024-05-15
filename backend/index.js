import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import bookRoute from "./routes/bookRoute.js";

const app = express();

app.use(express.json());

// Configure CORS
app.use(
  cors({
    origin: "https://mern-bookstore-t5tj.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"], // Add any additional methods if needed
    credentials: true, // Add this if you're using cookies or sessions
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello world");
});

app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
