import mongoose from "mongoose";
const commentSchema = mongoose.Schema(
  {
    album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
    content: { type: String, default: "" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "comments" }
);

export default mongoose.model("Comments", commentSchema);
