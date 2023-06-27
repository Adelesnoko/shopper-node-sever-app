import mongoose from "mongoose";
const albumSchema = mongoose.Schema(
  {
    name: String,
    albumId: String,
    artistName: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    // comments: { type: mongoose.Schema.Types.ObjectId, ref: "Comments" },
  },
  { collection: "albums" }
);

export default mongoose.model("Album", albumSchema);
