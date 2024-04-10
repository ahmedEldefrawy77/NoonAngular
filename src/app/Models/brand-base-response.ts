import { IBrand } from "./ibrand";

export interface BrandBaseResponse {
    id:string;
    status:boolean;
    responseNumber:number;
    response:IBrand[];
    token:string
}
