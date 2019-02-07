import { Component, OnInit } from '@angular/core';
import { LoyaltyService } from '../loyalty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loyalty-products-list',
  templateUrl: './loyalty-products-list.component.html',
  styleUrls: ['./loyalty-products-list.component.css']
})
export class LoyaltyProductsListComponent implements OnInit {

  results: any [];
  constructor(  private loyaltyService:LoyaltyService, private router: Router ) { }

  ngOnInit() {

    //function of getting all products
    this.loyaltyService.getAllProducts().subscribe(data => {
      this.results = data;
      });

  }

  viewProduct(productName: string){
    this.router.navigate(['/productDetail', productName])
  }

}
