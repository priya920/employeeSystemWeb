import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';




const route: Routes = [
  { path: '', component: LoginComponent }
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


export class LoginModule { }
