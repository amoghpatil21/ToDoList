import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'todo', pathMatch: "full"},
    { path: 'todo', component: TodoComponent},
    { path:'edit-todo/:id',component: TodoEditComponent}

];


@NgModule({

    imports: [RouterModule.forRoot(routes),],

    exports: [RouterModule]

})

export class AppRoutingModule { }