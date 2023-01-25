import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstUpperPipe } from './first-upper.pipe';



@NgModule({
  declarations: [
    FirstUpperPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FirstUpperPipe
  ]
})
export class FirstUpperModule { }
