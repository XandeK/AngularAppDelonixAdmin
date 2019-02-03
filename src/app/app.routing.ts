import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoyaltyProductsListComponent} from './loyalty-products-list/loyalty-products-list.component';

const appRoutes: Routes = [
{ path: 'loyalty', component:LoyaltyProductsListComponent},

{ path: '', component:LoyaltyProductsListComponent, pathMatch:'full'}
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);