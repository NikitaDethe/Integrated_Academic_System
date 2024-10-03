import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  constructor(private activedRoute:ActivatedRoute, private userService:UserServiceService, private route:Router){}

  ngOnInit(): void {
   this.getUser();
  }

  selectedUser:any;

  username:any;
  password:String='';
  firstName:any;
  lastName:any;
  email:any;
  role:any;

  getUser()
  {
  this.selectedUser=  this.activedRoute.snapshot.paramMap.get('username');

  this.userService.getUserByUsername(this.selectedUser).subscribe((response)=>{

    this.firstName=response.firstName;
    this.lastName=response.lastName;
    this.email=response.email;
    this.role=response.role;
    this.username=response.username;
    this.password=response.password;
  })
  }

  updateUser(){
   const user={
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
    password: this.password,
    email: this.email,
    role: this.role

   };
this.userService.updateUser(user).subscribe((response)=>{

  alert("update Successfully: "+user.username);

  this.route.navigate(['/get-all-user'])
})


  }
}
