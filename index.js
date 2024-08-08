const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res)=>{
    let name= req.body.name;
    let query=req.body.query;

    let transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"gaurangnakum09@gmail.com",
            pass:"fvjqgceajtrulisg"
        }
    })
    let mailOptions={
        from:"gaurangnakum09@gmail.com",
        to:"gaurangnakum09@gmail.com",
        subject:"Enquiry from " +name,
        text:" query " + query 
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log("mail err", err);
            res.status(500).json(err);
        }
        else{
            console.log("mail send",info.response);
            res.status(200).json("mail send");
        }
    })
});
app.listen(9000);