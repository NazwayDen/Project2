import { Rate } from "../enums/rate.enum";
import { Comment } from "./comment";
import { User } from "./user";

export class Mathtask {
    
    id:number;
    name:string;
    condition:string;
    creatorId:number;
    rateId:number;
    likeCount:number;
    dislikeCount:number;

    comments:Comment[];
    creatorUser:User;
    rating:Rate;


}
