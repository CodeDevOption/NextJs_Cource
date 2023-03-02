import mongoose from "mongoose";

const main = async()=>{
   await mongoose.connect('mongodb+srv://admin:admin123@testing.jf1vl0d.mongodb.net/?retryWrites=true&w=majority');
    console.log('database Connection Succsesfully');
}

export default main;