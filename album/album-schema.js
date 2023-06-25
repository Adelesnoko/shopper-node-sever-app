import mongoose from "mongoose";

const musicSchema = mongoose.Schema(
  {
    name: String,
    musicId: String,
    artistName: String,
    likes: { type: Number, default: 0 },
  },
  { collection: "musics" }
);

export default mongoose.model("Album", musicSchema);
