import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form, } from '@angular/forms';
import { LoyaltyService } from '../loyalty.service';

@Component({
  selector: 'app-new-room-rate',
  templateUrl: './new-room-rate.component.html',
  styleUrls: ['./new-room-rate.component.css']
})
export class NewRoomRateComponent implements OnInit {
  myForm:FormGroup;
  records: any [];
  constructor(private fb: FormBuilder, private loyaltyService: LoyaltyService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      roomName: '',
      roomType: '',
      roomRate: '',

    });
  }

  newRoomRate() {
    alert("New Room Rate Successfully Created!");
    this.loyaltyService.newRoomRate(this.myForm.value.roomName, this.myForm.value.roomType, this.myForm.value.roomRate).subscribe(records => {
      this.records = records;

    });
  }

}
