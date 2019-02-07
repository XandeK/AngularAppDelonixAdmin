import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { from } from 'rxjs'; 
import { passwordMatchValidator } from '../custom.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private AccountService: AccountService, private router: Router) { }
     
  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      pwSet: this.fb.group({
        password: ['', [Validators.required,
        Validators.minLength(8)]],
        password2: ['', [Validators.required]]
      }, { validator: passwordMatchValidator }),
      contact: '',
      role: '',
    });

  }
  onSubmit(){
    
      console.log(this.myForm.controls.pwSet.value.password);
      this.AccountService.regAdmin(this.myForm.value.name, this.myForm.value.email, this.myForm.controls.pwSet.value.password , this.myForm.value.contact, this.myForm.value.role).subscribe();
      alert('Register Successful');
      this.router.navigateByUrl('/login');
  }

}
