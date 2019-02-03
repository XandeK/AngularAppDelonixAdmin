import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoyaltyProductsListComponent } from './loyalty-products-list/loyalty-products-list.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoyaltyProductsListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
