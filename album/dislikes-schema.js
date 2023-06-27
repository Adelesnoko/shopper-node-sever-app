import mongoose from "mongoose";
const dislikesSchema = mongoose.Schema(
  {
    album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { collection: "dislikes" }
);

export default mongoose.model("Dislikes", dislikesSchema);
