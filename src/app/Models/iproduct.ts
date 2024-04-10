import { IMoney } from "./imoney";

export interface IProduct {
    name:string,
    id:string,
    price:IMoney,
    quantity:number,
    imagePath:string,
    specifications:Record<string,string>,
    description: string
}
