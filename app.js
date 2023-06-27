// const express = require('express')
import express from "express";
import cors from "cors";
import UserController from "./users/users-controller.js";
// import postsController from "./posts/posts-controller.js";
import session from "express-session";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";
import AlbumController from "./album/album-controller.js";
import FollowsController from "./album/follows-controller.js";

mongoose.connect(
  "mongodb+srv://adelafeng:adelshopper2023@cluster1.z1dn24e.mongodb.net/music-niche?retryWrites=true&w=majority"
);

const app = express();
app.set("trust proxy", 1); // for deploy
app.use(
  cors({
    credentials: true,
    origin: "https://main--music-niche-web-app.netlify.app", // for deploy
    // origin: "http://localhost:3000", // for local
  })
);
app.use(
  session({
    secret: "any string",
    resave: false,
    proxy: true, // for deploy
    saveUninitialized: false,
    cookie: {
      // for deploy
      sameSite: "none", // for deploy
      secure: true, // for deploy
    },
  })
);

app.use(express.json());

const port = process.env.PORT || 4000;

// postsController(app);
UserController(app);
AuthController(app);
AlbumController(app);
FollowsController(app);

app.listen(process.env.PORT || 4000);
