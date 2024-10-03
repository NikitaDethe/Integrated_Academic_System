import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit{

  constructor(private studentService:StudentServiceService){}

  ngOnInit(): void {
   this.getAllStudent();
  }

  students:any;

  getAllStudent()
  {
    this.studentService.getAllStudent().subscribe((response)=>{

      this.students=response;
    })
  }
}
