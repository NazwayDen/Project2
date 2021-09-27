import { User } from "./user";

export class Comment {
    id:number;
    text:string;
    likeCount:number;
    dislikeCount:number;
    mathtaskId:number;
    date:Date;
    userId:number;
    isForPost:boolean;

    userOwner: User;
    comments:Comment[];
}
