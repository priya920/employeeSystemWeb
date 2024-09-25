import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagmentComponent } from './employee-managment.component';



const route: Routes = [
  { path: '', component: EmployeeManagmentComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule
  ],
  declarations: [
    
  ]
})


export class EmployeeManagmentModule { }
