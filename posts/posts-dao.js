import postsModel from "./posts-model.js";

export const findAllPosts = () =>
  postsModel.find().populate("author", "username").exec();
export const findPostsByAuthorId = (author) => postsModel.find({ author });
export const createPost = (post) => postsModel.create(post);
export const deletePost = (pid) => postsModel.deleteOne({ _id: pid });
export const updateTPost = (pid, post) =>
  postsModel.updateOne({ _id: tid }, { $set: post });
