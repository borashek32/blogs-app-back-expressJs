import { UserType } from './../types/users.types';
import { Request, Response } from "express";
import db from '../data';

export const getUsers = (req: Request, res: Response) => {
  return res.json(db.users)
}

export const getUser = (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = db.users.find((user: UserType) => user.id === Number(userId));
  if (!user) {
    res.status(404).send(`User with id ${userId} not found`); 
    return;
  }
  return res.json(user);
}
