import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./Employee/Employee.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { AddEmployeeComponent } from "./add-Employee/add-Employee.component";

@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        AddEmployeeComponent,   
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}