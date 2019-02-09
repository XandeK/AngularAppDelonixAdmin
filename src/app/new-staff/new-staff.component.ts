import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';
import { FormBuilder, FormGroup } from 
'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.css']
})
export class NewStaffComponent implements OnInit {

  records: any = [];
  myForm: FormGroup;
  
  constructor(private housekeepingService: HousekeepingService,private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({staffname: '',staffaddress: '',permitstatus: '',mobilenumber: '',email: '',gender: '',bankdetail: '',special: '',
    });
  }

  newstaff(){
    this.router.navigateByUrl('/admin');
    alert("New staff added!")
    this. housekeepingService.newstaff(this.myForm.value.staffname,
      this.myForm.value.staffaddress,this.myForm.value.permitstatus,this.myForm.value.mobilenumber,this.myForm.value.email,this.myForm.value.gender,this.myForm.value.bankdetail,this.myForm.value.special).subscribe(records => {
    this.records = records;
    });
    }
}
