import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-Employee',
  templateUrl: './add-Employee.component.html',
  styleUrl: './add-Employee.component.scss'
})
export class AddEmployeeComponent {
  Employees: any = [];

  constructor(private http: HttpClient,private router:Router) {
  }

  newEmployee = {
    fname: '',
    lname: '',  
  }
  createEmployee() {
    this.http.post('http://localhost:3000/Employees', this.newEmployee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newEmployee.fname = '';
        this.newEmployee.lname = '';
        
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
  goToViewEmployees() {
    this.router.navigate(['/Employee']);
  }
}
