import * as usersDao from "./users-dao.js";

// var currentUserVar;
const AuthController = (app) => {
  const register = async (req, res) => {
    const username = req.body.username;
    const user = await usersDao.findUserByUsername(username);
    if (user) {
      res.sendStatus(403);
      return;
    }
    const newUser = await usersDao.createUser(req.body);
    req.session["currentUser"] = newUser;
    // currentUserVar = newUser;
    res.json(newUser);
  };

  const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // const user = await usersDao.findUserByCredentials(username, password);
    if (username && password) {
      const user = await usersDao.findUserByCredentials(username, password);
      if (user) {
        req.session["currentUser"] = user;
        res.json(user);
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  };

  const profile = (req, res) => {
    const currentUser = req.session["currentUser"];
    // if (!currentUser) {
    //     res.sendStatus(404);
    //     return;
    // }
    // res.json(currentUser);
    if (currentUser) {
      res.json(currentUser);
    } else {
      res.sendStatus(403);
    }
  };

  const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const update = (req, res) => {};

  app.post("/users/register", register);
  app.post("/users/login", login);
  app.post("/users/profile", profile);
  app.post("/users/logout", logout);
  app.put("/users", update);
  // app.post("/api/login", login);
  // app.post("/api/register", register);
  // app.get("/api/profile", profile);
  // app.post("/api/logout", logout);
};
export default AuthController;
