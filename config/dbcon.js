import mongoose from "mongoose";


export const dbconnection = async()=>{
      try {
        await mongoose.connect(process.env.DB_URI)
        console.log("db is conected ");
        

      } catch (err) {
        console.log("The db is not connected ", err);
        
      }
}