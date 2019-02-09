import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';
import { FormBuilder, FormGroup } from 
'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housekeeping-report',
  templateUrl: './housekeeping-report.component.html',
  styleUrls: ['./housekeeping-report.component.css']
})
export class HousekeepingReportComponent implements OnInit {
  records: any = [];
  myForm: FormGroup;
  
  constructor(private housekeepingService: HousekeepingService,private fb: FormBuilder,private router: Router) { }
  ngOnInit() {
    this.myForm = this.fb.group({date: '',jobtype: '',staffnumber: '',
    });
      // Retrieve posts from the API
   this.housekeepingService.gethousekeepingreport().subscribe(records => {
    this.records = records;
   });
  }
}
