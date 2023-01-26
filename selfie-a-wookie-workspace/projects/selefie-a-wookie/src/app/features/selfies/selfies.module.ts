import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSelfiesComponent } from './list-selfies/list-selfies.component';
import { PageSelfiesComponent } from './pages/page-selfies/page-selfies.component';
import { FirstUpperModule } from '../../shared/ui/components/pipes/first-upper/first-upper.module';
import { SelfiesRoutingModule } from './selfies-routing.module';
import { EditSelfieComponent } from './edit-selfie/edit-selfie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSelfieComponent } from './create-selfie/create-selfie.component';



@NgModule({
  declarations: [
    ListSelfiesComponent,
    PageSelfiesComponent,
    EditSelfieComponent,
    CreateSelfieComponent
  ],
  imports: [
    CommonModule,
    SelfiesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FirstUpperModule
  ],
  exports: [
    PageSelfiesComponent
  ]
})
export class SelfiesModule { }
