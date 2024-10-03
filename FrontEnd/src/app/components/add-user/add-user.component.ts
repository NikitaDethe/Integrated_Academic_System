import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  username:any;
  password:any;
  firstName:any;
  lastName:any;
  email:any;
  role:any;

  constructor(private userService:UserServiceService, private route:Router){}

  addUser()
  {
this.userService.addUser(this.username,this.firstName,this.lastName,this.email,this.role,this.password).subscribe((response)=>{

  if(response!=null)
  {
    console.log(response)
    alert("done");
    this.route.navigate(['/home'])
  }else{
    alert("Fillup the all Details ")
  }
})
  }

}
