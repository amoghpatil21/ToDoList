import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  users: any = [];

  constructor(private http: HttpClient) {
  }

  newUser = {
    fname: '',
    lname: '',
  }
  createUser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newUser.fname = '';
        this.newUser.lname = '';
        
      },
      error: (err) => {
        console.log(err);
      },
    })
  }
}
