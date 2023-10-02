import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
    borrower: {
      type: String, 
    },
  },
  {
    timestamps: true
  }
);

export const Book = mongoose.model('Cat', bookSchema);