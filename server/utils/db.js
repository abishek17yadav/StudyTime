//connecting to database code
const mongoose= require('mongoose');

const URI="mongodb://localhost:27017/mern_admin"
// const URI="mongodb+srv://abishek01yadav:0Mongodb@17m @cluster0.pyu7tdk.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0"
// const URI=process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDb= async()=>{
    try{
        await mongoose.connect(URI);
        console.log("Connection sucessful to database")

    }catch(error){
        console.error("Database connection failed")
        process.exit(0);

    }
}

module.exports= connectDb;

