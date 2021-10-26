import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllocateRoomComponent } from './allocate-room/allocate-room.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGuestComponent,
    AllocateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
