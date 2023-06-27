import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    usertype: {
      type: String,
      enum: ["ADMIN", "USER", "VIPUSER"],
      default: "USER",
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
