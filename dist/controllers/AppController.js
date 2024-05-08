"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTodo = exports.getUserTodos = exports.getUserAlbum = exports.getUserAlbums = exports.getUserPost = exports.getUserPosts = exports.getUser = exports.getUsers = void 0;
const users_1 = __importDefault(require("../data/users"));
const posts_1 = __importDefault(require("../data/posts"));
const comments_1 = __importDefault(require("../data/comments"));
const albums_1 = __importDefault(require("../data/albums"));
const photos_1 = __importDefault(require("../data/photos"));
const todos_1 = __importDefault(require("../data/todos"));
const getUsers = (req, res) => {
    if (!users_1.default.length) {
        res.status(404).json(`There is no users in the database.`);
    }
    return res.json(users_1.default);
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { userId } = req.params;
    const foundUser = users_1.default.find((user) => user.id === +userId);
    if (!foundUser) {
        res.status(404).send(`User with id ${userId} not found.`);
        return;
    }
    return res.json(foundUser);
};
exports.getUser = getUser;
const getUserPosts = (req, res) => {
    const { userId } = req.params;
    const foundUser = users_1.default.find((user) => user.id === +userId);
    if (!foundUser) {
        res.status(404).send(`User with id ${userId} not found.`);
        return;
    }
    const userPosts = posts_1.default.filter((post) => post.userId === +userId);
    if (!userPosts.length) {
        res.status(404).send(`Posts of user ${foundUser.name} not found.`);
        return;
    }
    return res.json(userPosts);
};
exports.getUserPosts = getUserPosts;
const getUserPost = (req, res) => {
    const { userId, postId } = req.params;
    const foundUser = users_1.default.find((user) => user.id === +userId);
    if (!foundUser) {
        res.status(404).send(`User with id ${userId} not found.`);
        return;
    }
    const userPosts = posts_1.default.filter((post) => post.userId === +userId);
    if (!userPosts.length) {
        res.status(404).send(`Posts of user with id ${userId} not found.`);
        return;
    }
    const post = userPosts.find((post) => post.id === +postId);
    if (!post) {
        res.status(404).send(`Post with id ${postId} of user with id ${userId} not found.`);
        return;
    }
    const postComments = comments_1.default.filter(comment => comment.postId === +postId);
    if (!postComments.length) {
        res.status(404).send(`Post with id ${postId} has no comments yet. Be the first and write something.`);
    }
    return res.json({ post, postComments });
};
exports.getUserPost = getUserPost;
const getUserAlbums = (req, res) => {
    const { userId } = req.params;
    const foundUser = users_1.default.find((user) => user.id === +userId);
    if (!foundUser) {
        res.status(404).send(`User with id ${userId} not found.`);
        return;
    }
    const userAlbums = albums_1.default.filter((album) => album.id === +userId);
    if (!userAlbums.length) {
        res.status(404).send(`User ${foundUser.name} has no albums.`);
        return;
    }
    return res.json(userAlbums);
};
exports.getUserAlbums = getUserAlbums;
const getUserAlbum = (req, res) => {
    const { userId, albumId } = req.params;
    const foundUser = users_1.default.find((user) => user.id === +userId);
    if (!foundUser) {
        res.status(404).send(`User with id ${userId} not found.`);
        return;
    }
    const userAlbums = albums_1.default.filter((album) => album.id === +userId);
    if (!userAlbums.length) {
        res.status(404).send(`User with id ${userId} has no albums.`);
        return;
    }
    const album = userAlbums.find((album) => album.id === +albumId);
    if (!album) {
        res.status(404).send(`User with id ${userId} has no album with id ${albumId}.`);
        return;
    }
    const albumPhotos = photos_1.default.filter((photo) => photo.albumId === +albumId);
    if (!albumPhotos) {
        res.status(404).send(`Album with id ${albumId} has no photos`);
        return;
    }
    return res.json({ album, albumPhotos });
};
exports.getUserAlbum = getUserAlbum;
const getUserTodos = (req, res) => {
    const { userId } = req.params;
    const foundUser = users_1.default.find((user) => user.id === +userId);
    if (!foundUser) {
        res.status(404).send(`User with id ${userId} not found.`);
        return;
    }
    const userTodos = todos_1.default.filter((todo) => todo.userId === +userId);
    if (!userTodos.length) {
        res.status(404).send(`User with id ${userId} has no todos.`);
        return;
    }
    return res.json(todos_1.default);
};
exports.getUserTodos = getUserTodos;
const getUserTodo = (req, res) => {
    const { userId, todoId } = req.params;
    const foundUser = users_1.default.find((user) => user.id === +userId);
    if (!foundUser) {
        res.status(404).send(`User with id ${userId} not found.`);
        return;
    }
    const userTodos = todos_1.default.filter((todo) => todo.userId === +userId);
    if (!userTodos.length) {
        res.status(404).send(`User ${foundUser.name} has no todos.`);
        return;
    }
    const todo = todos_1.default.find((todo) => todo.id === +todoId);
    if (!todo) {
        res.status(404).send(`User ${foundUser.name} has no todo with id ${todoId}.`);
        return;
    }
    return res.json(todo);
};
exports.getUserTodo = getUserTodo;
