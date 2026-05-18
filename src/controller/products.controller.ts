import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";

export const productController = (req: IncomingMessage, res:ServerResponse) => {
    const url = req.url
    const method = req.method

    const urlParts = url?.split("/")
    const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null
    console.log(id,);
    // get all products
    if(url === '/products' && method === "GET"){
       const products =  readProduct()
    res.writeHead(200,{'content-type': 'application/json'})
    res.end(JSON.stringify({message: "Products retrieved successfully", data: products}))
    }
    else if(method === 'GET' && id !== null){
    const products =  readProduct()
    

    }
}