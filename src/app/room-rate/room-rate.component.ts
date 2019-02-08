import { Component, OnInit } from '@angular/core';
import { LoyaltyService } from '../loyalty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-rate',
  templateUrl: './room-rate.component.html',
  styleUrls: ['./room-rate.component.css']
})
export class RoomRateComponent implements OnInit {
  results: any [];
  constructor(private loyaltyService:LoyaltyService, private router:Router) { }

  ngOnInit() {
        //function of getting all products
        this.loyaltyService.getAllRoomRate().subscribe(data => {
          this.results = data;
          });
  }

  deleteRoom(roomName : string){
    console.log(roomName);
    alert('Account deleted!')
    this.router.navigateByUrl('/roomRate')
    this.loyaltyService.deleteRoom(roomName).subscribe(results => {
    this.results = results;
    
    });
  }

}
