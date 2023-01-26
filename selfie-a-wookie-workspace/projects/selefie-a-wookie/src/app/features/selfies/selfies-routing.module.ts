import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSelfiesComponent } from './pages/page-selfies/page-selfies.component';

const routes: Routes = [{
  path: 'selfies',
  component: PageSelfiesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfiesRoutingModule { }
