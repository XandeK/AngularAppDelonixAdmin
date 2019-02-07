import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoyaltyProductsListComponent} from './loyalty-products-list/loyalty-products-list.component';
import {NewProductLoyaltyComponent} from './new-product-loyalty/new-product-loyalty.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RegisterComponent} from './register/register.component';
import {NewRoomRateComponent} from './new-room-rate/new-room-rate.component';
import {RoomRateComponent} from './room-rate/room-rate.component';

const appRoutes: Routes = [
{ path: 'loyalty', component:LoyaltyProductsListComponent},
{ path: 'newProduct', component:NewProductLoyaltyComponent},
{ path: 'productDetail/:productName', component:ProductDetailComponent},
{ path: 'register', component:RegisterComponent},
{ path: 'roomRate', component:RoomRateComponent},
{ path: 'newRoomRate', component:NewRoomRateComponent},

{ path: '', component:NewRoomRateComponent, pathMatch:'full'}
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);