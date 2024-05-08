import { Router } from "express";
import { 
  getUser, 
  getUsers, 
  getUserPosts, 
  getUserPost, 
  getUserAlbums,
  getUserAlbum,
  getUserTodos,
  getUserTodo,
} from "../controllers/AppController";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:userId", getUser);

router.get("/users/:userId/posts", getUserPosts);
router.get("/users/:userId/posts/:postId", getUserPost);

router.get("/users/:userId/albums", getUserAlbums);
router.get("/users/:userId/albums/:albumId", getUserAlbum);

router.get("/users/:userId/todos", getUserTodos);
router.get("/users/:userId/todos/:todoId", getUserTodo);

export default router;