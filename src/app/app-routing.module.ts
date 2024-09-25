import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './componrnts/employees/employees-list/EmployeesListComponent';
import { EmployeeManagmentComponent } from './componrnts/employee-managment/employee-managment.component';
import { DashboardComponent } from './componrnts/dashboard/dashboard.component';
import { LoginComponent } from './componrnts/login/login.component';
import { SignupComponent } from './componrnts/signup/signup.component';
import { HomeLayoutComponent } from './componrnts/base layout/home-layout.component';
import { LoginLayoutComponent } from './componrnts/base layout/login-layout.component';



const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: '',
		component: LoginLayoutComponent,
		children: [
			
			{ path: 'login', loadChildren: () => import('./componrnts/login/login.module').then(m => m.LoginModule) },
			{ path: 'signup', loadChildren: () => import('./componrnts/signup/signup.module').then(m => m.SignupModule) },

		]
	},
		{
			path: '',
			component: HomeLayoutComponent,
			children: [
				{ path: 'dashboard', loadChildren: () => import('./componrnts/dashboard/dashboard.module').then(m => m.DashboardModule) },
				{ path: 'employeemenagment', loadChildren: () => import('./componrnts/employee-managment/employee-managment.module').then(m => m.EmployeeManagmentModule) },
				{ path: 'employees', loadChildren: () => import('./componrnts/employees/employees-list/employees-list.module').then(m => m.EmployeesListModule) },
				
			]
		},
	
	
]




// const routes: Routes = [
// 	{ path: '', redirectTo: 'login', pathMatch: 'full' },
 
//   {
//     path:'signup',
//     component:SignupComponent
//   },
//   {
//     path:'login',
//     component: LoginComponent
//   },
//   {
//     path:'employees',
//     component: EmployeesListComponent
//   },
//   {
//     path:'employeemenagment',
//     component: EmployeeManagmentComponent
//   },

//   {
//     path:'dashboard',
//     component: DashboardComponent
//   }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
