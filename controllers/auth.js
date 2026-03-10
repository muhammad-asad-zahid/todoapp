import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
    const token = req.cookies.token;


    if (!token) {
        const message = {
            message: "You are un authorized person"
        }
        return res.render('login', { message })

    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded;
    next()





}