import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSelfiesComponent } from './list-selfies/list-selfies.component';
import { PageSelfiesComponent } from './pages/page-selfies/page-selfies.component';
import { FirstUpperModule } from '../../shared/ui/components/pipes/first-upper/first-upper.module';



@NgModule({
  declarations: [
    ListSelfiesComponent,
    PageSelfiesComponent
  ],
  imports: [
    CommonModule,
    FirstUpperModule
  ],
  exports: [
    PageSelfiesComponent
  ]
})
export class SelfiesModule { }
