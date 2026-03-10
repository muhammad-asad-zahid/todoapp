import express from "express"
import { created, deleted, edit, update } from "../controllers/todo.controller.js";
import { auth } from "../controllers/auth.js";

const todoroutes = express.Router();

todoroutes.post('/create',auth,created)
todoroutes.post('/deleted',auth,deleted)
todoroutes.get('/edit',auth , edit)
todoroutes.post('/update',auth,update)

export default todoroutes