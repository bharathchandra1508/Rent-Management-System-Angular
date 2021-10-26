import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocateRoomComponent } from './allocate-room/allocate-room.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';

const routes: Routes = [
  {path:'create-guest',component: CreateGuestComponent},
  {path:'allocate-room/:id',component: AllocateRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
