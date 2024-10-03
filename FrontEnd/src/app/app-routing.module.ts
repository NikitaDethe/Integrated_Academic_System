import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MenuComponent } from './components/menu/menu.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { AttendanceComponent } from './components/attendance/attendance.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'add',component:AddUserComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'get-all-user',component:AllUsersComponent
  },
  {
    path:'add-student',component:AddStudentComponent
  },
  {
    path:'get-all-student',component:AllstudentsComponent
  },
  {
    path:'add-subject',component:AddSubjectComponent
  },
  {
    path:'get-all-subject',component:AllSubjectsComponent
  },
  {
    path:'edit-user/:username',component:EditUserComponent
  },
  {
    path:'delete-user/:username',component:DeleteUserComponent
  },
  {
    path:'attendance',component:AttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
