import { createServer, IncomingMessage, Server } from "http";

const server :Server = createServer((req :IncomingMessage, res)=> {
    console.log(req);
})

const port = 3000

server.listen(port, ()=> {
    console.log(`server is running in ${port}`);
})