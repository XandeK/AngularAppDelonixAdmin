import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';
import { FormBuilder, FormGroup } from 
'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-housekeeping-report',
  templateUrl: './new-housekeeping-report.component.html',
  styleUrls: ['./new-housekeeping-report.component.css']
})
export class NewHousekeepingReportComponent implements OnInit {

  records: any = [];
  myForm: FormGroup;

  constructor(private housekeepingService: HousekeepingService,private fb: FormBuilder,private router: Router) { }

ngOnInit() {
    this.myForm = this.fb.group({date: '',jobtype: '',staffnumber: '',
    });
  }

  newhousekeepingreport(){
    this.router.navigateByUrl('/newHousekeepingReport');
    alert("New room report added!")
    this. housekeepingService.newhousekeepingreport(
      this.myForm.value.date,
      this.myForm.value.jobtype,
      this.myForm.value.staffnumber).subscribe(records => {
    this.records = records;
    });
    }

}