//clerk is a third party authentication servive just like firebase authentication
import mongoose from "mongoose";
const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    audioUrl: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    album: {
      type: mongoose.Schema.ObjectId,
      ref: "Album",
      required: false,
    },
  },
  { timestamps: true } //createdAt, updatedAt
);
export const Song = mongoose.model("Song", songSchema);
