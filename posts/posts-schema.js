import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    topic: { type: String, default: "Deals" },
    username: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    title: { type: String, default: "NA" },
    time: { type: String, default: Date.now },
    image: { type: String, default: "noImage.jpg" },
    postContent: String,
    replies: { type: Number, default: 0 },
    reposts: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    disliked: { type: Boolean, default: false },
    liked: { type: Boolean, default: false },
    handle: { type: String, default: "@" },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "posts" }
);
export default schema;
