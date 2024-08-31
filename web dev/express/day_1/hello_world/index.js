const express = require("express") // import express

const app=express(); // create instance of express

const PORT=2024; // define port

app.get("/",(req,res)=>{ // create a route with response 
    res.send("hello world1!")
})

app.get("/about",(req,res)=>{
    res.send("About Page!");
})

app.get("/contact",(req,res)=>{
    res.send("Contact Page!");
})

app.listen(PORT,()=>{ // start the server and listen for incoming
console.log("PORT 2024 is working")
})