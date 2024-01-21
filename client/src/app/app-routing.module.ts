import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Employee/Employee.component';
import { AddEmployeeComponent } from './add-Employee/add-Employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Employee', pathMatch: "full"},
    { path: 'Employee', component: EmployeesComponent },
    { path:'addEmployee',component:AddEmployeeComponent},
    { path: 'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}

];


@NgModule({

    imports: [RouterModule.forRoot(routes),],

    exports: [RouterModule]

})

export class AppRoutingModule { }