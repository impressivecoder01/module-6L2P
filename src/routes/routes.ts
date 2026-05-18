import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/products.controller";

export const routeHandler = (req:IncomingMessage, res: ServerResponse) => {
    const url = req.url
    const method = req.method
    if(url === '/' && method === "GET"){
        // console.log('this is root');
        res.writeHead(200,{'content-type': 'application/json'})
        res.end(JSON.stringify({message: "this is root"}))
    }
    else if(url?.startsWith('/products')){
        productController(req, res)
    }
    else{
        res.writeHead(404,{'content-type': 'application/json'})
        res.end(JSON.stringify({message: "this route is not here"}))
    }
}