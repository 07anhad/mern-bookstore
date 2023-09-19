import mongoose from "mongoose";
const { Schema } = mongoose;
//try mongoose.Schema if this does not work
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
  },
  {
    timestamps: true
  }
)

export const Book = mongoose.model('Cat', bookSchema);