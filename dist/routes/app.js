"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AppController_1 = require("../controllers/AppController");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json('Welcome, your app is working well');
});
router.get("/users", AppController_1.getUsers);
router.get("/users/:userId", AppController_1.getUser);
router.get("/users/:userId/posts", AppController_1.getUserPosts);
router.get("/users/:userId/posts/:postId", AppController_1.getUserPost);
router.get("/users/:userId/albums", AppController_1.getUserAlbums);
router.get("/users/:userId/albums/:albumId", AppController_1.getUserAlbum);
router.get("/users/:userId/todos", AppController_1.getUserTodos);
router.get("/users/:userId/todos/:todoId", AppController_1.getUserTodo);
exports.default = router;
