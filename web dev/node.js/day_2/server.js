// http module
const http=require("http");

// fixing port value
const PORT = 3020;

// fixing name of local host
const HOSTNAME="localhost"

// function for creating http server
const server=http.createServer((req,res)=>{

    
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    res.end("Node Sever created by Chirag Goel!");
});

// function to fix the port ,output after    calling server
server.listen(PORT,()=>{
    console.log(`server running at ${HOSTNAME}:${PORT}`)
})