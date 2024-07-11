import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/todosRouts.js";

dotenv.config();


app.use(express.json());
app.use(cors());
app.use(express.static("/public"));
app.use("/todos", router);

app.get("/", (req,res) =>{
    res.send("Hello World")
});



const connecDB = async () =>{
    try{
        mongoose.connect(process.env.CONNECTION_STRING);
        app.listen(5000, () =>{
            console.log("Server running on port 5000") 
        });
        console.log("Database connected successfully")
        
    }catch(error){
        console.log({msg: error});
    }
};

connecDB();