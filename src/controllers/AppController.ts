import { 
  AlbumType, 
  CommentType, 
  PhotoType, 
  PostType, 
  TodoType, 
  UserType 

} from "../types/app.types";
import { Request, Response } from "express";
import users from "../data/users";
import posts from "../data/posts";
import comments from "../data/comments";
import albums from "../data/albums";
import photos from "../data/photos";
import todos from "../data/todos";

export const getUsers = (req: Request, res: Response) => {
  if (!users.length) {
    res.status(404).json(`There is no users in the database.`);
  }
  return res.json(users);
}

export const getUser = (req: Request, res: Response) => {
  const { userId } = req.params;
  const foundUser = users.find((user: UserType) => user.id === +userId);
  if (!foundUser) {
    res.status(404).send(`User with id ${userId} not found.`); 
    return;
  }

  return res.json(foundUser);
}

export const getUserPosts = (req: Request, res: Response) => {
  const { userId } = req.params;
  const foundUser = users.find((user: UserType) => user.id === +userId)
  if (!foundUser) {
    res.status(404).send(`User with id ${userId} not found.`); 
    return;
  }
  const userPosts: PostType[] = posts.filter((post: PostType) => post.userId === +userId);
  if (!userPosts.length) {
    res.status(404).send(`Posts of user ${foundUser.name} not found.`); 
    return;
  }
  return res.json(userPosts);
}

export const getUserPost = (req: Request, res: Response) => {
  const { userId, postId } = req.params;
  const foundUser = users.find((user: UserType) => user.id === +userId)
  if (!foundUser) {
    res.status(404).send(`User with id ${userId} not found.`); 
    return;
  }
  const userPosts = posts.filter((post: PostType) => post.userId === +userId);
  if (!userPosts.length) {
    res.status(404).send(`Posts of user with id ${userId} not found.`); 
    return;
  }
  const post: PostType | undefined = userPosts.find((post: PostType) => post.id === +postId);
  if (!post) {
    res.status(404).send(`Post with id ${postId} of user with id ${userId} not found.`); 
    return;
  }
  const postComments = comments.filter(comment => comment.postId === +postId)
  if (!postComments.length) {
    res.status(404).send(`Post with id ${postId} has no comments yet. Be the first and write something.`)
  }
  return res.json({ post, postComments });
}

export const getUserAlbums = (req: Request, res: Response) => {
  const { userId } = req.params;
  const foundUser = users.find((user: UserType) => user.id === +userId);
  if (!foundUser) {
    res.status(404).send(`User with id ${userId} not found.`); 
    return;
  }
  const userAlbums: AlbumType[] = albums.filter((album: AlbumType) => album.id === +userId);
  if (!userAlbums.length) {
    res.status(404).send(`User ${foundUser.name} has no albums.`); 
    return;
  }
  return res.json(userAlbums)
}

export const getUserAlbum = (req: Request, res: Response) => {
  const { userId, albumId } = req.params;
  const foundUser = users.find((user: UserType) => user.id === +userId);
  if (!foundUser) {
    res.status(404).send(`User with id ${userId} not found.`); 
    return;
  }
  const userAlbums: AlbumType[] = albums.filter((album: AlbumType) => album.id === +userId);
  if (!userAlbums.length) {
    res.status(404).send(`User with id ${userId} has no albums.`); 
    return;
  }
  const album: AlbumType | undefined = userAlbums.find((album: AlbumType) => album.id === +albumId);
  if (!album) {
    res.status(404).send(`User with id ${userId} has no album with id ${albumId}.`); 
    return;
  }
  const albumPhotos: PhotoType[] = photos.filter((photo: PhotoType) => photo.albumId === +albumId);
  if (!albumPhotos) {
    res.status(404).send(`Album with id ${albumId} has no photos`); 
    return;
  }
  return res.json({ album, albumPhotos });
}

export const getUserTodos = (req: Request, res: Response) => {
  const { userId } = req.params;
  const foundUser = users.find((user: UserType) => user.id === +userId);
  if (!foundUser) {
    res.status(404).send(`User with id ${userId} not found.`); 
    return;
  }
  const userTodos: TodoType[] = todos.filter((todo: TodoType) => todo.userId === +userId);
  if (!userTodos.length) {
    res.status(404).send(`User with id ${userId} has no todos.`); 
    return;
  }
  return res.json(todos);
}

export const getUserTodo = (req: Request, res: Response) => {
  const { userId, todoId } = req.params;
  const foundUser = users.find((user: UserType) => user.id === +userId);
  if (!foundUser) {
    res.status(404).send(`User with id ${userId} not found.`); 
    return;
  }
  const userTodos: TodoType[] = todos.filter((todo: TodoType) => todo.userId === +userId);
  if (!userTodos.length) {
    res.status(404).send(`User ${foundUser.name} has no todos.`); 
    return;
  }
  const todo: TodoType | undefined = todos.find((todo: TodoType) => todo.id === +todoId);
  if (!todo) {
    res.status(404).send(`User ${foundUser.name} has no todo with id ${todoId}.`); 
    return;
  }
  return res.json(todo);
}