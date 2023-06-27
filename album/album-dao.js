import albumModel from "./album-schema.js";
import likesModel from "./likes-schema.js";
// import commentModel from "./comment-schema.js";
import dislikesModel from "./dislikes-schema.js";

export const findAllAlbums = () => albumModel.find();
export const findAlbumById = (id) => albumModel.findById(id);
export const findAlbumByAlbumId = (albumId) => albumModel.findOne({ albumId });
export const createAlbum = (album) => albumModel.create(album);

export const createLike = (id, userId) =>
  likesModel.create({ album: id, user: userId });

export const findLikesForUser = (userId) =>
  likesModel.find({ user: userId }).populate("album").exec();

export const findLikesForAlbum = (albumId) =>
  likesModel.find({ album: albumId }).populate("user").exec();

export const createDislike = (id, userId) =>
  likesModel.create({ album: id, user: userId });

export const findDislikesForUser = (userId) =>
  likesModel.find({ user: userId }).populate("album").exec();

export const findDislikesForAlbum = (albumId) =>
  likesModel.find({ album: albumId }).populate("user").exec();

// export const createComment = (comment, userId) =>
//   commentModel.create({ content: comment, user: userId });

// export const findCommentsForUser = (userId) =>
//   commentModel.find({ user: userId }).populate("content").exec();

// export const findCommentForAlbum = (albumId) =>
//   commentModel.find({ album: albumId }).populate("user").exec();
