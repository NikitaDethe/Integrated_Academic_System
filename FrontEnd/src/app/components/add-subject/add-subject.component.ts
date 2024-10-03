import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectServiceService } from 'src/app/services/subject-service.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

constructor(private subjectService:SubjectServiceService,private route:Router){}  

name:String='';

  addSubject()
  {
    this.subjectService.addSubject(this.name).subscribe((response)=>{
      if(response!=null)
      {
        alert("Subject added sucessfully...");
        this.route.navigate(['/home']);
      }else{
        alert("Fill up the form");
      }
       
    }
    )
  }
}
