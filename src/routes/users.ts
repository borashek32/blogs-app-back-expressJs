import { Router } from "express";
import { getUser, getUsers } from "../controllers/UsersController";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:userId", getUser);
usersRo

export default usersRouter;