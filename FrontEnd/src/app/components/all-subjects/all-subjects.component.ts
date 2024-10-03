import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-all-subjects',
  templateUrl: './all-subjects.component.html',
  styleUrls: ['./all-subjects.component.css']
})
export class AllSubjectsComponent implements OnInit{

  constructor(private subjectService:SubjectServiceService){}
  
  ngOnInit(): void {
    this.getAllSubject();
  }

  subjects:any;

  getAllSubject()
  {
    this.subjectService.getAllSubject().subscribe((response)=>{
this.subjects=response;
    })
  }
}
