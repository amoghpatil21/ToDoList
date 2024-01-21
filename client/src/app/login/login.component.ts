import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'applogin',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 constructor(private http:HttpClient,private router: Router){

 }
 goToRegister() {
  this.router.navigate(['/register']);
}
}
