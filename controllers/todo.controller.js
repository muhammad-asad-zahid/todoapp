import { todo } from "../models/todo.model.js";


export const created = async (req,res)=>{
    console.log(req.body);
    const {title, description , userEmail} = req.body
    const {id} = req.user
    console.log(id);

    const todoadd = new todo({
        title,
        description,
        createdBy : id
    })
    
    await todoadd.save()
    console.log("todo saved");
    
        
    res.redirect('/')
    
}

export const deleted = async (req,res)=>{
        console.log("this is deleted ", req.body);
         const {id} = req.body;
        
         
        await  todo.findByIdAndDelete({_id : id})
        
        res.redirect('/')
        
}

export const edit = async (req,res)=>{
    
    
    const {id} = req.query;
      console.log(id);
      
    const todofind = await todo.findOne({_id : id})
     const {title , description } = todofind;
     const message = {
        id : id,
        title : title,
        desc : description
     }
     res.render('edit',{message})
}

export const update = async (req,res)=>{
    console.log(req.body);
    const {id, title ,description } = req.body;

    await todo.findByIdAndUpdate({_id :id},{title ,description})

    res.redirect('/')
    
}

