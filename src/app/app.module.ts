import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesListComponent } from './componrnts/employees/employees-list/EmployeesListComponent';
import { HttpClientModule } from '@angular/common/http';
import { CustomToastComponent } from './models/custom-toast/custom-toast.component';
import { EmployeeManagmentComponent } from './componrnts/employee-managment/employee-managment.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SearchPipe } from './search.pipe';
import { DashboardComponent } from './componrnts/dashboard/dashboard.component';
import { LoginComponent } from './componrnts/login/login.component';
import { SignupComponent } from './componrnts/signup/signup.component';
import { LoginLayoutComponent } from './componrnts/base layout/login-layout.component';
import { HomeLayoutComponent } from './componrnts/base layout/home-layout.component';
import { SidebarComponent } from './componrnts/sidebar/sidebar.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    CustomToastComponent,
    EmployeeManagmentComponent,
    SearchPipe,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
   
LoginLayoutComponent,
HomeLayoutComponent,
SidebarComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      toastComponent: CustomToastComponent,
			closeButton: true,
			positionClass: 'toast-top-right',
			newestOnTop: false,
		}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
