import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  Tasks:any=[];
  isLoading=false;

  constructor(private http: HttpClient ,private active: ActivatedRoute, private router:Router) {
  }
  ngOnInit(): void {
    this.getTask();
  }
  newTask={
    task:'',

  }

  createTask() {
    this.isLoading=true
    this.http.post('http://localhost:3000/todo', this.newTask).subscribe({
      next: (res: any) => {
        this.isLoading=false;
        console.log(res);
        this.newTask.task = '';
        
      },
      error: (err) => {
        this.isLoading=false
        console.log(err);
      },
    })
  }

  getTask() {
    this.isLoading= true;
    this.http.get('http://localhost:3000/todo').subscribe({
      next: (res: any) => {
        this.isLoading=false;
        this.Tasks = res.Tasks;
      },
      error: (err) => {
        this.isLoading=false;
        console.log(err); 
      }
    })
  }
  deleteTask(id: any) {
    this.http.delete('http://localhost:3000/todo/' + id).subscribe({
      next: (res: any) => {
        this.getTask();
      },
      error: (err: any) => {
      },
    });
  }
  
  // goToAddEmployee() {
  //   this.router.navigate(['/addEmployee']);
  // }

}
