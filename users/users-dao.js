import usersModel from "./users-model.js";

export const findAllUsers = () => usersModel.find();

export const findUserById = (userId) => usersModel.findById(userId);

export const findUserByUsername = (username) =>
  usersModel.findOne({ username });

export const findUserByCredentials = (username, password) =>
  usersModel.findOne({ username, password });

export const createUser = (user) => usersModel.create(user);

export const updateUser = (userId, user) =>
  usersModel.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) => usersModel.deleteOne({ _id: userId });

// export const findUserByUsername = (username) => {
//     const index = users.findIndex((u) => u.username === username);
//     if (index !== -1) return users[index];
//     return null;
// };

// export const findUserByCredentials = (username, password) => {
//     const index = users.findIndex((u) => u.username === username && u.password === password);
//     if (index !== -1) return users[index];
//     return null;
// };

// export const createUser = (user) => users.push(user);

// export const updateUser = (uid, user) => {
//     const index = users.findIndex((u) => u._id === uid);
//     users[index] = { ...users[index], ...user };
//     return {status: 'ok'}
// };

// export const deleteUser = (uid) => {
//     const index = users.findIndex((u) => u._id === uid);
//     users.splice(index, 1);
//     return {status: 'ok'}
// };
