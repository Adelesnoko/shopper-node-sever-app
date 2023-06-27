// const express = require('express')
import express from "express";
import cors from "cors";
import UserController from "./users/users-controller.js";
// import postsController from "./posts/posts-controller.js";
import MusicController from "./album/album-controller.js";
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
    origin: "https://main--music-niche-web-app.netlify.app/", // for deploy
    // origin: "http://localhost:3000",   // for local
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

// mongoose.connect("mongodb://127.0.0.1:27017/tuiter");
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
// mongoose.connect(CONNECTION_STRING);

// // app.use(cors());
// app.use((req, res, next) => {
//     const allowedOrigins = ["http://localhost:3000", "https://a6--admirable-kringle-708e3b.netlify.app"];
//     const origin = req.headers.origin;

//     if (allowedOrigins.includes(origin)) {
//       res.header("Access-Control-Allow-Origin", origin);
//     }
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH, OPTIONS");
//     res.header("Access-Control-Allow-Credentials", "true");
//     next();
// });

app.use(express.json());

const port = process.env.PORT || 4000;

// postsController(app);
UserController(app);
AuthController(app);
AlbumController(app);
FollowsController(app);
// app.get('/hello', (req, res) => {res.send('Life is wonderful!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);
