import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./Employee/Employee.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { AddEmployeeComponent } from "./add-Employee/add-Employee.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        AddEmployeeComponent, 
        LoginComponent,
        RegisterComponent,
        EditEmployeeComponent  
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
        ReactiveFormsModule,
        RouterOutlet,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}