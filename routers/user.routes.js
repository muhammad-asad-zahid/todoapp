import express from "express";
import { loginpage, loginuser, signupUser, singuppage } from "../controllers/user.controller.js";

const routes = express.Router();

routes.get('/signup',singuppage)
routes.get('/login',loginpage)
routes.post('/signup',signupUser)
routes.post('/login',loginuser)

export default routes;