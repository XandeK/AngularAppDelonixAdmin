import { Component, OnInit } from '@angular/core';
import { LoyaltyService } from '../loyalty.service';

@Component({
  selector: 'app-room-rate',
  templateUrl: './room-rate.component.html',
  styleUrls: ['./room-rate.component.css']
})
export class RoomRateComponent implements OnInit {
  results: any [];
  constructor(private loyaltyService:LoyaltyService) { }

  ngOnInit() {
        //function of getting all products
        this.loyaltyService.getAllRoomRate().subscribe(data => {
          this.results = data;
          });
  }

}
