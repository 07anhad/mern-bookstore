import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'
import bookRoute from './routes/bookRoute.js'
import cors from 'cors';

const app = express(); 

app.use(express.json());

//middle ware for cors policy
app.use(cors())


app.get('/', (request,response) => {
  console.log(request);
  return response.status(234).send('Hello world')
})

app.use('/books', bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    })
  })
  .catch((error) => {
    console.log(error);
  }); 