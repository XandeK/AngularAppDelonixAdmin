import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoyaltyService } from '../loyalty.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  results: any = false;
  constructor(private fb: FormBuilder, private router: Router,private loyaltyService:LoyaltyService, public nav:NavbarService ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      mobilenumber: '',
    });
  }

  onSubmit() {
    this.loyaltyService.authUser(this.myForm.value.email, this.myForm.value.mobilenumber).subscribe(data => {
      this.results = data;
      
      if (this.results[0].auth) {
        this.nav.show()
        sessionStorage.setItem('email', this.myForm.value.email);
        this.router.navigateByUrl('/roomRate');
   
      }
      else{
        alert('Email or Password is Incorrect');
      }
    });
  }
}
