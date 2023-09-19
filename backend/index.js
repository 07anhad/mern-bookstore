import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js'

const app = express();

app.use(express.json());


app.get('/', (request,response) => {
  console.log(request);
  return response.status(234).send('Hello world')
})


app.post('/books', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message:'send all required feilds - title, author, publish year'
      })
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear
    };

    const book = await Book.create(newBook);

    return response.status(200).send(book)

  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
})

app.get('/books', async (request, response) => {
  try {
    const books = await Book.find({});
    const count = books.length;
    return response.status(200).send({ count, books });
  } catch(error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});



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