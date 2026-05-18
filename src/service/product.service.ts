import path from "path"
import fs from 'fs'

const filePath = path.join(process.cwd(), "src", "service", "product.service.ts");


export const readProduct = () => {
    const products = fs.readFileSync(filePath , "utf-8")
    return JSON.parse(products)
}