import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { LoyaltyService } from '../loyalty.service';

@Component({
  selector: 'app-new-product-loyalty',
  templateUrl: './new-product-loyalty.component.html',
  styleUrls: ['./new-product-loyalty.component.css']
})
export class NewProductLoyaltyComponent implements OnInit {
  myForm: FormGroup;
  records: any [];
  

  constructor(private fb: FormBuilder, private loyaltyService: LoyaltyService) { }

  ngOnInit() {
    // form of the new product
    this.myForm = this.fb.group({
      productImage: '',
      productName: '',
      productCost: '',
      productDesc: ''
    });


  }

  //function of creating new product
  createProduct() {
    alert("Product Successfully Created!");
    this.loyaltyService.createProduct(this.myForm.value.productImage, this.myForm.value.productName, this.myForm.value.productCost, this.myForm.value.productDesc).subscribe(records => {
      this.records = records;

    });
  }

}
