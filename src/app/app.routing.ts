import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoyaltyProductsListComponent} from './loyalty-products-list/loyalty-products-list.component';
import {NewProductLoyaltyComponent} from './new-product-loyalty/new-product-loyalty.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RegisterComponent} from './register/register.component';
import {NewRoomRateComponent} from './new-room-rate/new-room-rate.component';
import {RoomRateComponent} from './room-rate/room-rate.component';
import {AdminAccountComponent} from './admin-account/admin-account.component';
import {DirtyRoomComponent} from './dirty-room/dirty-room.component';
import {HousekeepingComponent} from './housekeeping/housekeeping.component';
import {ReportComponent} from './report/report.component';
import {LoginComponent} from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import {CheckInComponent } from './check-in/check-in.component';
import { UpdateproductComponent} from './updateproduct/updateproduct.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { HousekeepingReportComponent } from './housekeeping-report/housekeeping-report.component';
import { NewRoomReportComponent } from './new-room-report/new-room-report.component';
import { NewHousekeepingReportComponent } from './new-housekeeping-report/new-housekeeping-report.component'
import { NewDirtyRoomComponent } from './new-dirty-room/new-dirty-room.component';

const appRoutes: Routes = [
{ path: 'loyalty', component:LoyaltyProductsListComponent},
{ path: 'newProduct', component:NewProductLoyaltyComponent},
{ path: 'productDetail/:productName', component:ProductDetailComponent},
{ path: 'register', component:RegisterComponent},
{ path: 'roomRate', component:RoomRateComponent},
{ path: 'newRoomRate', component:NewRoomRateComponent},
{ path: 'admin', component:AdminAccountComponent},
{ path: 'dirtyRoom', component:DirtyRoomComponent},
{ path: 'housekeeping', component:HousekeepingComponent},
{ path: 'report', component:ReportComponent},
{ path: 'login', component:LoginComponent},
{ path: 'guest', component:GuestComponent},
{ path: 'checkIn', component:CheckInComponent},
{ path: 'updateProduct/:_id' , component:UpdateproductComponent},
{ path: 'newStaff' , component:NewStaffComponent},
{ path: 'housekeepingReport' , component:HousekeepingReportComponent},
{ path: 'newRoomReport' , component:NewRoomReportComponent},
{ path: 'newHousekeepingReport' , component:NewHousekeepingReportComponent},
{ path: 'newDirtyRoom' , component:NewDirtyRoomComponent},



{ path: '', component:LoginComponent, pathMatch:'full'}
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);