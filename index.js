import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    return res.json({
        message: "hello saif"
    });
});

app.get('/api',(req,res)=>{
    return res.json({message:"hello from api site"})
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server started on ${PORT}`);
});