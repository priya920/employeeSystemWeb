import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './EmployeesListComponent';




const route: Routes = [
  { path: '', component: EmployeesListComponent }
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


export class EmployeesListModule { }
