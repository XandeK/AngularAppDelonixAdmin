import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';
import { FormBuilder, FormGroup } from 
'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-room-report',
  templateUrl: './new-room-report.component.html',
  styleUrls: ['./new-room-report.component.css']
})
export class NewRoomReportComponent implements OnInit {

  records: any = [];
  myForm: FormGroup;

  constructor(private housekeepingService: HousekeepingService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({date: '',roomtype: '',guestnumber: '',
    });
  }

  newroomreport(){
    //this.router.navigateByUrl('/report');
    alert("New room report added!")
    this. housekeepingService.newroomreport(
      this.myForm.value.date,
      this.myForm.value.roomtype,
      this.myForm.value.guestnumber).subscribe(records => {
    this.records = records;
    });
    }

}
