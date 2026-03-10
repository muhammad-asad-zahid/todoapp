import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    userName : {
        type : String,
        require : true,
        trim : true
    },
    userEmail : {
        type : String,
         require : true,
         unique : true,
         trim : true
},
   userPassword : {
    type : String , 
    require : true,
    trim : true
   }
})

export const newusers = mongoose.model('usernew',usersSchema )