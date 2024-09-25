import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';





const route: Routes = [
  { path: '', component: SignupComponent }
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


export class SignupModule { }
