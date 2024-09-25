import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';




const route: Routes = [
  { path: '', component: DashboardComponent }
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


export class DashboardModule { }
