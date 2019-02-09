import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';
import { FormBuilder, FormGroup } from 
'@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dirty-room',
  templateUrl: './dirty-room.component.html',
  styleUrls: ['./dirty-room.component.css']
})
export class DirtyRoomComponent implements OnInit {

  records: any = [];
  myForm: FormGroup;

  constructor(private housekeepingService: HousekeepingService,private fb: FormBuilder,private router: Router)
   {
    // Retrieve posts from the API
    this.housekeepingService.getdirtyroom().subscribe(records => {
    this.records = records;
    });
    }

      ngOnInit() {
      this.myForm = this.fb.group({roomnumber: '',
      });
    }

    newdirtyroom(){
      this.router.navigateByUrl('/dirtyRoom');
      alert("New dirty room added!")
      this. housekeepingService.newdirtyroom(this.myForm.value.roomnumber,).subscribe(records => {
      this.records = records;
      });
      }


  }


