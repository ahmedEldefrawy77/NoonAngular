import { ICategory } from "./icategory";

export interface CategoryBaseResponse {
    id:string;
    status:boolean;
    responseNumber:number;
    response:ICategory[];
    token:string
}
