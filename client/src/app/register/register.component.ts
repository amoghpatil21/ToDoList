import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'appregister',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  User:any=[];
  isLoading=false;

  constructor(private http:HttpClient,private router:Router ){
  }

    newUser={
      email:'',
      password:'',
    }
    register() {
      this.isLoading=true;
      this.http.post('http://localhost:3000/user/register', this.newUser).subscribe({
        next: (res: any) => {
          this.isLoading
          console.log(res);
          this.newUser.email = '';
          this.newUser.password = '';
          
        },
        error: (err) => {
          console.log(err);
        },
      })
    }
  gotoLogin() {
    this.router.navigate(['/login']);
  }


}
