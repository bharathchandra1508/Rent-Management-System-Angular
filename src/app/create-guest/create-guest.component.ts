import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from '../guest';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-create-guest',
  templateUrl: './create-guest.component.html',
  styleUrls: ['./create-guest.component.css']
})
export class CreateGuestComponent implements OnInit {

  guest: Guest = new Guest();
  exform!: FormGroup;
  alert: boolean = false;

  proofs = ["Aadhar Card","PAN Card","Voter Card","Driving License","Passport"];

  minDOJ:any = "";
  maxDOB:any = "";
  minDOL:any = "";

  getDate(){
    var date:any = new Date();
    var toDate:any = date.getDate();
    if(toDate < 10){
      toDate = '0' + toDate;
    }
    var month:any = date.getMonth() + 1;
    if(month < 10){
      month = '0' + month;
    }
    var year:any = date.getFullYear();
    this.minDOJ = year + "-" + month + "-" + toDate;
    this.maxDOB = this.minDOJ;
    this.minDOL = this.minDOJ;
  }

  constructor(private guestService: GuestService,
    private router: Router) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name' : new FormControl(null, 
        [Validators.required, 
        Validators.pattern('^[a-zA-Z_]+( [a-zA-Z_]+)*$'),
        Validators.maxLength(100)]),
      'email' : new FormControl(null,
        [Validators.required,
        Validators.email,
        Validators.maxLength(30)]),
      'mobile' : new FormControl(null,
        [Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(10),
        Validators.maxLength(10)]),
      'dob' : new FormControl(null,
        Validators.required),
      'govtid' : new FormControl(null,
        [Validators.required,
        Validators.maxLength(50)]),
      'add1' : new FormControl(null,
        [Validators.required,
        Validators.maxLength(50)]),
      'add2' : new FormControl(null,
        [Validators.required,
        Validators.maxLength(50)]),
      'add3' : new FormControl(null,
        [Validators.required,
        Validators.maxLength(50)]),
      'state' : new FormControl(null,
        [Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z_]+( [a-zA-Z_]+)*$')]),
      'city' : new FormControl(null,
        [Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z_]+( [a-zA-Z_]+)*$')]),
      'zipcode' : new FormControl(null,
        [Validators.required,
        Validators.maxLength(6),
        Validators.pattern('^[0-9]+$')]),
      'doj' : new FormControl(null,
        [Validators.required]),
      'proof' : new FormControl(null,
        [Validators.required])
    });
    this.getDate();
  }

  onSubmit(){
    if(this.exform.valid){
      console.log(this.guest);
      this.saveGuest();
    }
    else{
      console.log(this.alert);
      this.alert = true;
    }
  }

  saveGuest(){
    this.guestService.createGuest(this.guest).subscribe(data => {
      console.log(data);
    },error => console.log(error));
  }

  closeAlert(){
    this.alert = false;
  }

}
