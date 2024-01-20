import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    { path: 'user', component: UsersComponent },
    { path:'addUser',component:AddUserComponent}

];


@NgModule({

    imports: [RouterModule.forRoot(routes),],

    exports: [RouterModule]

})

export class AppRoutingModule { }