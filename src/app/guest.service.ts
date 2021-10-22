import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from './guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private baseURL = "http://localhost:8080/api/guest/create-guest";

  constructor(private httpClient: HttpClient) { }

  createGuest(guest: Guest): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,guest);
  }

}
