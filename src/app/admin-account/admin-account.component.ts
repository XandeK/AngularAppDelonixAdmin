import { Component, OnInit } from '@angular/core';
import { HousekeepingService } from '../housekeeping.service';
import { FormBuilder, FormGroup } from 
'@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  records: any = [];
  myForm: FormGroup;
  constructor(private housekeepingService: HousekeepingService,private fb: FormBuilder,private router: Router) {
    // Retrieve posts from the API
    this.housekeepingService.getstaffrecords().subscribe(records => {
    this.records = records;
    });
    }

       ngOnInit() {
        this.myForm = this.fb.group({
          staffname: '',
          staffaddress: '',
          permitstatus: '',
          mobilenumber: '',
          email: '',
          gender: '',
          bankdetail: '',
          special: '',
        });
      }

      newstaff(){
        // newValue1 or 2 can be retrieved through forms or calculated
        this.router.navigateByUrl('/admin');
        alert("New staff added!")
        this. housekeepingService.newstaff(this.myForm.value.staffname,
          this.myForm.value.staffaddress,this.myForm.value.permitstatus,this.myForm.value.mobilenumber,this.myForm.value.email,this.myForm.value.gender,this.myForm.value.bankdetail,this.myForm.value.special).subscribe(records => {
         this.records = records;
         });
         }


    
    }
    


