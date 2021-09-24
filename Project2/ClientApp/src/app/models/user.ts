import { RouteConfigLoadEnd } from "@angular/router";
import { Role } from "../enums/role.enum";

export class User {
    
    public id: number;
    public nickname: string;
    public role: Role;
    public isAdmin: boolean = false;
    public isRegistred:boolean;

}
