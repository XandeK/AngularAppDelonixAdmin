import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoyaltyProductsListComponent} from './loyalty-products-list/loyalty-products-list.component';
import {NewProductLoyaltyComponent} from './new-product-loyalty/new-product-loyalty.component';
import {ProductDetailComponent} from './product-detail/product-detail.component'

const appRoutes: Routes = [
{ path: 'loyalty', component:LoyaltyProductsListComponent},
{ path: 'newProduct', component:NewProductLoyaltyComponent},
{ path: 'productDetail/:productName', component:ProductDetailComponent},

{ path: '', component:LoyaltyProductsListComponent, pathMatch:'full'}
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);