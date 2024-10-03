import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  addUser(username:any,firstName:any,lastName:any,email:any,role:any,password:any):Observable<any>
  {
    const url="http://localhost:8091/user/register-user";

    return this.http.post(url,{username,firstName,lastName,email,role,password});
  }

  //get all users

  getAllUser():Observable<any>
  {
    const url="http://localhost:8091/user/get-all-user";

    return this.http.get(url);
  }

  getUserByUsername(username:any):Observable<any>
  {
    const url=`http://localhost:8091/user/get-user-by-username/${username}`;

    return this.http.get(url);
  }

  updateUser(user: any): Observable<any> {
    const url = 'http://localhost:8091/user/update-user';
    return this.http.put(url, user);
  }

  deleteUser(username:any):Observable<any>{

    const url='http://localhost:8091/user/delete-user-by-username';

    const params=new HttpParams().set
  return this.http.delete(url);

  }
}
