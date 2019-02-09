import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';
import { FormBuilder, FormGroup } from 
'@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.component.html',
  styleUrls: ['./housekeeping.component.css']
})
export class HousekeepingComponent implements OnInit {
  records: any = [];
  results: any = [];
  myForm: FormGroup;

  constructor(private housekeepingService: HousekeepingService,private fb: FormBuilder,private router: Router) 
  { 

  }

  
  ngOnInit() {
    this.myForm = this.fb.group({staffname: '', roomnumber: '',
    });
      // Retrieve posts from the API
   this.housekeepingService.getstaffrecords().subscribe(records => {
    this.records = records;
   });
   this.housekeepingService.getdirtyroom().subscribe(records => {
    this.results = records;
   });
  }

  update() {
    this.router.navigateByUrl('/housekeeping');
    alert("Change updated!")
  }

}
