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
  isLoading=false;
 constructor(private http:HttpClient,private router: Router){

 }
 user={
  email:'',
  password:'',

 }
 login(){
  this.isLoading=true;
  this.http.post('http://localhost:3000/user/login', this.user).subscribe({
        next: (res: any) => {
          this.isLoading=false
          console.log(res);
          this.user.email = '';
          this.user.password = '';
          
        },
        error: (err) => {
          this.isLoading=false
          console.log(err);
        },
      })
 }
 
 goToRegister() {
  this.router.navigate(['/register']);
}
}
