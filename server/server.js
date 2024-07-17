require("dotenv").config();  //mandatory to use when you use .env
const express =require('express')
const cors =require ('cors')
const app= express();
const authRoute =require ("./router/auth-router");
const contactRoute=require("./router/contact-router")
const aiRoute = require("./router/ai-router"); 


// const connect =require("./utils/db");
const connectDb = require('./utils/db');

// how to use Cors
const corsOptions ={
    origin:"http://localhost:3000",
    method:"GET, POST, DELETE ,PUT, PATCH, HEAD",
    Credentials:true,
}

app.use(cors(corsOptions));


app.use(express.json())  //important to place before any routes that handles json it shoul dbe applised at th ebegining

//mount the router-to use the router in your main express app 
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api", aiRoute);



const PORT=process.env.PORT || 5000;

connectDb().then(()=>{    //if connection sucessfull then only start the server
       
app.listen(PORT ,()=>{
    console.log(`Succesfully running on port number ${PORT}`);
});
});
