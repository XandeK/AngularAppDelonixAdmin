import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoyaltyService } from '../loyalty.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  myForm: FormGroup;
  _id: any;
  records: any [];

  constructor(private loyaltyService: LoyaltyService ,private fb: FormBuilder,  private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
      this._id = this.route.snapshot.params['_id'];
      console.log(this._id);

      this.myForm = this.fb.group({
      _id: this._id,
      productImage: '',
      productName: '',
      productCost: '',
      productDesc: ''
      });
  }

  updateProduct(_id: string){
    // newValue can be retrieved through forms or a calculated value
    alert('Product Updated!')
    this.loyaltyService.updateProduct(this.myForm.value._id, this.myForm.value.productImage, this.myForm.value.productName, this.myForm.value.productCost,  this.myForm.value.productDesc ).subscribe(records => {
    this.records = records;
    });
    }

}
