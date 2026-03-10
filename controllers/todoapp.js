import { newusers } from "../models/newuser.model.js"
import { todo } from "../models/todo.model.js"


export const getdata = async (req,res)=>{
    
    
    const {id} = req.user
     const usertodos =  await todo.find({createdBy: id})
      
      
   
          const {email} = req.user
          const userfind =await  newusers.findOne({ userEmail: email})
         
         
          const message = {
               name : userfind.userName,
               email: userfind.userEmail,
               todo : usertodos
          }   
         
          
    res.render('app',{message})

}