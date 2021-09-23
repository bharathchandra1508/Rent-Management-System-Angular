import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGuestComponent } from './create-guest/create-guest.component';

const routes: Routes = [
  {path:'create-guest',component: CreateGuestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
