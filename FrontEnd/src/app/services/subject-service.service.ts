import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor(private http:HttpClient) { }

  addSubject(name:any):Observable<any>
  {
    const url="http://localhost:8091/subject/add-subject";

   return this.http.post(url,{name});
  }

  getAllSubject():Observable<any>
  {
    const url="http://localhost:8091/subject/get-all-subjects";

   return this.http.get(url);
  }
}
