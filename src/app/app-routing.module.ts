import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisordocComponent } from './visordoc/visordoc.component';

const routes: Routes = [
  { path: '', redirectTo: '/visordoc', pathMatch: 'full' },
  { path: 'visordoc' ,component: VisordocComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
