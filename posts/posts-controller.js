import * as postsDao from "./posts-dao.js";

const createPost = async (req, res) => {
  const currentUser = req.session["currentUser"];
  const newPost = { ...req.body, author: currentUser._id };
  const actualPost = await postsDao.createPost(newPost);
  res.json(actualPost);
};

const findAllPosts = async (req, res) => {
  const posts = await postsDao.findAllPosts();
  res.json(posts);
};

const findPostsByAuthorId = async (req, res) => {
  const author = req.params.author;
  const posts = await postsDao.findPostsByAuthorId(author);
  res.json(posts);
};

const findMyPosts = async (req, res) => {
  const currentUser = req.session["currentUser"];
  const posts = await postsDao.findPostsByAuthorId(author);
  res.json(posts);
};

const deletePost = async (req, res) => {
  const postIdToDelete = req.params.tid;
  const status = await postsDao.deletePost(postIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post("/posts", createPost);
  app.get("/posts", findAllPosts);
  app.get("/posts/:author", findPostsByAuthorId);
  app.get("/my-posts", findMyPosts);
  app.delete("/posts/:tid", deletePost);
};
