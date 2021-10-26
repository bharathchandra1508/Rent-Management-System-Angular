import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-allocate-room',
  templateUrl: './allocate-room.component.html',
  styleUrls: ['./allocate-room.component.css']
})
export class AllocateRoomComponent implements OnInit {

  id!: number;
  guest: Guest = new Guest();

  constructor(private guestService: GuestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.guestService.getGuestById(this.id).subscribe(data => {
      this.guest = data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log("Submitting...");
  }

}
