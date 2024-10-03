import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }

  addStudent(name:any,email:any):Observable<any>
  {
    const url='http://localhost:8091/student/add-student'
   return this.http.post(url,{name,email});
  }

  getAllStudent():Observable<any>
  {
    const url='http://localhost:8091/student/get-all-students';
   return this.http.get(url);
  }
}
