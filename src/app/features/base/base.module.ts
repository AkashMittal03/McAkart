import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { OrdersComponent } from '../orders/orders.component';
import { ProductsComponent } from '../products/products.component';
import { BaseComponent } from './base.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BaseRoutingModule } from './base-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    OrdersComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
