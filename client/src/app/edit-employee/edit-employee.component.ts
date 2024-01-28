import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit {
  Employee = {
    fname: '',
    lname: ''
  }
  isLoading=false;


  constructor(
    private http: HttpClient,
    private active: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployeeById(this.active.snapshot.params['id'])
  }

  getEmployeeById(id: string) {
    this.isLoading=true;
    this.http.get('http://localhost:3000/employees/' + id).subscribe({
      next: (res: any) => {
        this.isLoading=false;
        console.log('res', res);
        this.Employee.fname = res.fname;
        this.Employee.lname = res.lname;
      },
      error: (error: any) => {
        this.isLoading=false;
        console.log('error', error)
      }
    })
  }

  updateEmployee() {
    this.isLoading=true;

    this.http.put('http://localhost:3000/employees/' + this.active.snapshot.params['id'], this.Employee).subscribe({
      next: (res: any) => {
        this.isLoading=false;
        console.log('res', res);
        this.router.navigate(['/Employee'])
      },
      error: (error: any) => {
        this.isLoading=false;
        console.log('error', error)
      }
    })
  }

}
