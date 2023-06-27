import * as dao from "./album-dao.js";

export default function AlbumController(app) {
  const findAllAlbums = async (req, res) => {
    const albums = await dao.findAllAlbums();
    res.json(albums);
  };
  const findAlbumById = async (req, res) => {
    const id = req.params.id;
    const album = await dao.findAlbumById(id);
    res.json(album);
  };
  const findAlbumByAlbumId = async (req, res) => {
    const albumId = req.params.albumId;
    const album = await dao.findAlbumByAlbumId(albumId);
    res.json(album);
  };
  const createAlbum = async (req, res) => {
    const album = req.body;
    const newAlbum = await dao.createAlbum(album);
    res.json(newAlbum);
  };

  const likeAlbum = async (req, res) => {
    const albumId = req.params.albumId;
    const album = await dao.findAlbumByAlbumId(albumId);
    let album_temp = null;
    if (album) {
      album.likes = album.likes + 1;
      await album.save();
      album_temp = album;
    } else {
      const newAlbum = await dao.createAlbum({
        ...req.body,
        albumId,
        likes: 1,
      });
      album_temp = newAlbum;
    }
    const currentUser = req.session["currentUser"];
    console.log("req.session", req.session);
    const userId = currentUser._id;
    await dao.createLike(album_temp._id, userId);
    res.json(album_temp);
  };

  const findAlbumsILike = async (req, res) => {
    const currentUser = req.session["currentUser"];
    console.log("req.session", req.session);
    const userId = currentUser._id;
    const likes = await dao.findLikesForUser(userId);
    const albums = likes.map((like) => like.album);
    res.json(albums);
  };

  const findLikesForAlbum = async (req, res) => {
    const id = req.params.id;
    const actualAlbum = await dao.findAlbumByAlbumId(id);
    if (actualAlbum) {
      console.log("actualAlbum", actualAlbum);
      const likes = await dao.findLikesForAlbum(actualAlbum._id);
      const users = likes.map((like) => like.user);
      res.json(users);
      return;
    }
    res.json([]);
  };

  const dislikeAlbum = async (req, res) => {
    const albumId = req.params.albumId;
    const album = await dao.findAlbumByAlbumId(albumId);
    let album_temp = null;
    if (album) {
      album.dislikes = album.dislikes + 1;
      await album.save();
      album_temp = album;
    } else {
      const newAlbum = await dao.createAlbum({
        ...req.body,
        albumId,
        dislikes: 1,
      });
      album_temp = newAlbum;
    }
    const currentUser = req.session["currentUser"];
    console.log("req.session", req.session);
    const userId = currentUser._id;
    await dao.createDislike(album_temp._id, userId);
    res.json(album_temp);
  };

  const findAlbumsIDislike = async (req, res) => {
    const currentUser = req.session["currentUser"];
    console.log("req.session", req.session);
    const userId = currentUser._id;
    const dislikes = await dao.findDislikesForUser(userId);
    const albums = dislikes.map((dislike) => dislike.album);
    res.json(albums);
  };

  const findDislikesForAlbum = async (req, res) => {
    const id = req.params.id;
    const actualAlbum = await dao.findAlbumByAlbumId(id);
    if (actualAlbum) {
      console.log("actualAlbum", actualAlbum);
      const dislikes = await dao.findDislikesForAlbum(actualAlbum._id);
      const users = dislikes.map((dislike) => dislike.user);
      res.json(users);
      return;
    }
    res.json([]);
  };

  app.get("/api/albums", findAllAlbums);
  app.get("/api/albums/:id", findAlbumById);
  app.get("/api/albums/albumId/:albumId", findAlbumByAlbumId);
  app.post("/api/albums", createAlbum);
  app.post("/api/albums/albumId/:albumId/like", likeAlbum);
  app.get("/api/albums/i/like", findAlbumsILike);
  app.get("/api/albums/albumId/:id/likes", findLikesForAlbum);
  app.post("/api/albums/albumId/:albumId/dislike", dislikeAlbum);
  app.get("/api/albums/i/dislike", findAlbumsIDislike);
  app.get("/api/albums/albumId/:id/dislikes", findDislikesForAlbum);
}
