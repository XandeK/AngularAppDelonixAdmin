import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoyaltyService } from '../loyalty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  result: any = [];

  constructor(private route:ActivatedRoute,  private loyaltyService:LoyaltyService,  private router: Router) { }

  ngOnInit() {
    const productName = this.route.snapshot.params['productName'];
    this.result = this.loyaltyService.findByName(productName).subscribe(data => {
      this.result = data;
      });
      
  }

  updateProduct(_id: string){
    this.router.navigate(['/updateProduct', _id])
  }


}
