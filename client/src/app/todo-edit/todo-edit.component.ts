import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.scss'
})
export class TodoEditComponent implements OnInit {
  Tasks={
    task:'',
  }
  isLoading=false;
  
  constructor(
    private http: HttpClient,
    private active: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTaskById(this.active.snapshot.params['id'])
  }

  getTaskById(id: string) {
    this.isLoading=true;
    this.http.get('http://localhost:3000/todo/' + id).subscribe({
      next: (res: any) => {
        this.isLoading=false;
        console.log('res', res);
        this.Tasks.task = res.task;
        

      },
      error: (error: any) => {
        this.isLoading=false;
        console.log('error', error)
      }
    })
  }

  updateTask() {
    this.isLoading=true;

    this.http.put('http://localhost:3000/todo/' + this.active.snapshot.params['id'], this.Tasks).subscribe({
      next: (res: any) => {
        this.isLoading=false;
        console.log('res', res);
        this.router.navigate(['/todo'])
      },
      error: (error: any) => {
        this.isLoading=false;
        console.log('error', error)
      }
    })
  }



}
