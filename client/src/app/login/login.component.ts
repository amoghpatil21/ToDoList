import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'applogin',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  User:any=[];
 constructor(private http:HttpClient,private router: Router){

 }
 user={
  email:'',
  password:'',

 }
 login(){
  this.http.post('http://localhost:3000/user/login', this.user).subscribe({
        next: (res: any) => {
          console.log(res);
          this.user.email = '';
          this.user.password = '';
          
        },
        error: (err) => {
          console.log(err);
        },
      })
 }
 
 goToRegister() {
  this.router.navigate(['/register']);
}
}
