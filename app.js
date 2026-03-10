import express from "express";
import dotenv from "dotenv";
import { dbconnection } from "./config/dbcon.js";
import routes from "./routers/user.routes.js";
import cookieParser from "cookie-parser";
import { auth } from "./controllers/auth.js";
import { newusers } from "./models/newuser.model.js";
import todoroutes from "./routers/todo.routes.js";
import { getdata } from "./controllers/todoapp.js";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cookieParser())

app.set("view engine","ejs")

dotenv.config()

dbconnection()

app.use("/user/", routes)

app.use('/todo/',todoroutes)

// app.get('/', (req, res) => {
   
//     res.send('asad')
// })




app.get('/',auth,getdata)


const port = process.env.PORT;


app.listen(port)
