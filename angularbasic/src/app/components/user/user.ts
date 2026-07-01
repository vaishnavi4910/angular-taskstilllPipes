import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from './services/api';
@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {
  http=inject(HttpClient);
  userList: any[] = [];
  userObj: any= {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": "",
}

ngOnInit():void{
   this.getUsers();

}

getUsers() {
  this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((result :any)=>{
    debugger;
    this.userList=result;
  });
}

onSaveUser(){
  debugger;
  this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
    next: (result :any)=>{
      debugger;
      alert("user create success");
      this.getUsers();
    },
    error: (error)=>{
      debugger;
      alert("user create failed"+error);
    }}

  )
  }

}
