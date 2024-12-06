import express from "express";
import dotenv from "dotenv";
import { postRoute } from "./routes/postRoute.js";

const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.send('Welcome to Mock Storage')
})

app.use('/post',postRoute)




const port = process.env.PORT || 3000;
app.listen(port, (req , res) => {
    console.log(`Server is running on port ${port}`);
})