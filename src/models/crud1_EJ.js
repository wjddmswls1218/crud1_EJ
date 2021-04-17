import mongoose from "mongoose";

const Schema = mongoose.Schema;

const crud1_EJ = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`crud1_EJ`, crud1_EJ, `crud1_EJ`);
