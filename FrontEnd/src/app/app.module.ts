import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectsComponent } from './components/all-subjects/all-subjects.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { AttendanceComponent } from './components/attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    AddUserComponent,
    AllUsersComponent,
    AddStudentComponent,
    AllstudentsComponent,
    AddSubjectComponent,
    AllSubjectsComponent,
    EditUserComponent,
    DeleteUserComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
