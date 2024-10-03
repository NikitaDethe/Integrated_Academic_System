import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  
  name:any;
  email:any;

constructor(private studentService:StudentServiceService, private route:Router){}

  addStudent()
  {
this.studentService.addStudent(this.name,this.email).subscribe((response)=>{

  if(response!=null)
  {
    alert("done");
    this.route.navigate(['/home'])
  }else{
    alert("Fill All Details...")
  }
})
  }
}
