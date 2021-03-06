import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box.directive';
import { InitCapsPipe } from './shared/init-caps.pipe';

@NgModule({
  declarations: [AppComponent, CustomerComponent, OrdersComponent, SearchBoxDirective, InitCapsPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
