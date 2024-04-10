import { IProduct } from "./iproduct";

export interface BaseResponse {
    Id:string;
    Status:boolean;
    ResponseNumber:number;
    Response:IProduct[];
    token:string
}
