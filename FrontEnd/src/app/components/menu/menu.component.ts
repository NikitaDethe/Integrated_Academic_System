import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  preventRedirect(event: Event) {
    event.preventDefault();  // Prevents default navigation behavior
  }
  
  constructor(private userService:UserServiceService,private router:Router){}

  logout() {
    localStorage.getItem('');
    this.router.navigate(['']);
  }


}
