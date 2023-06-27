import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    emial: String,
    role: {
      type: String,
      enum: ["admin", "user", "vipuser"],
      default: "user",
    },
    dob: Date,
    created: { type: Date, default: Date.now },
    married: { type: Boolean, default: false },
    vipStatus: { type: Boolean, default: false },
    loginStatus: { type: Boolean, default: false },
  },
  { collection: "users" }
);

export default usersSchema;
