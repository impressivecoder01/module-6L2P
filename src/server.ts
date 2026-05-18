import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/routes";

const server :Server = createServer((req :IncomingMessage, res)=> {
    // console.log(req.url); 
    // console.log(req.method);
   routeHandler(req,res)
})

const port = 3000

server.listen(port, ()=> {
    console.log(`server is running in ${port}`);
})