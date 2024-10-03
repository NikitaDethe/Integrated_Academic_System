import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private userService:UserServiceService){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  users:any;

  getAllUsers()
  {
this.userService.getAllUser().subscribe((response)=>{
  this.users=response;
})
  }
}
