import { newusers } from "../models/newuser.model.js";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signupUser = async (req, res) => {

    const { userName, userEmail, userPassword } = req.body
    const checkuser = await newusers.findOne({ userEmail: userEmail })
    console.log(checkuser);

    if (checkuser) {
        const message = {
            message: 'user with this Email already exist'
        }

        return res.render('signup', { message })

    }

    const hashedpassword = await bcrypt.hash(userPassword, 10)
    console.log(hashedpassword);

    const user = new newusers({

        userName: userName,
        userEmail: userEmail,
        userPassword: hashedpassword

    })

    await user.save()

    const { _id } = user
    console.log(_id);

    const token = jwt.sign(
        { email: userEmail, id: _id },
        process.env.SECRET_KEY,
        { expiresIn: '1d' }
    );



    return res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    }).redirect("/")





}

export const loginuser = async (req, res) => {
    const { userEmail, userPassword } = req.body;
    const user = await newusers.findOne({ userEmail: userEmail });
    console.log(user);


    if (user) {

        const ismatched = await bcrypt.compare(userPassword, user.userPassword)
        if (!ismatched) {
            const message = {
                message: "Invalid password"
            }
            return res.render('login', { message })
        }

        const { _id } = user
        console.log(_id);

        const token = jwt.sign(
            { email: userEmail, id: _id },
            process.env.SECRET_KEY,
            { expiresIn: '1d' }
        );



        return res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        }).redirect("/")
    }
    else {
        const message = {
            message: "Please Enter correct email.."
        }
        res.render('login', { message })
    }

}

export const singuppage = (req, res) => {
    const message = {
        message: null
    }
    res.render("signup", { message })
}

export const loginpage = (req, res) => {
    const message = {
        message: null
    }
    res.render("login", { message })
}