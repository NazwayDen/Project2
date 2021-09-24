import { Inject,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemsRequest } from '../models/items-request';
import { User } from '../models/user';

@Injectable()
export class UserService{
  public constructor(@Inject(HttpClient) private http: HttpClient){}

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>('/Users/GetUsers');
  }
}
