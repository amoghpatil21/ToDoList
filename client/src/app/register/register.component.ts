import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'appregister',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private http:HttpClient,private router:Router ){

    
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }


}
