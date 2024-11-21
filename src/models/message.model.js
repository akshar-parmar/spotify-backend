//clerk is a third party authentication servive just like firebase authentication
import mongoose from "mongoose";
const messageSchema = new mongoose.Schema(
  {
    senderId: {
      //clerk Id
      type: String,
      required: true,
    },
    recieverId: {
      //clerk Id
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createdAt, updatedAt
);
export const Message = mongoose.model("Message", messageSchema);
