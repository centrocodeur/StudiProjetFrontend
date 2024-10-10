import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {DemoAngularMaterialModule} from "../DemoAngularMaterialModule";
import { CartComponent } from './cart/cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ViewOrderedProductsComponent } from './view-ordered-products/view-ordered-products.component';
import { ReviewOrderedProductComponent } from './review-ordered-product/review-ordered-product.component';
import { ViewProductDetailComponent } from './view-product-detail/view-product-detail.component';
import { ViewWishlistComponent } from './view-wishlist/view-wishlist.component';



@NgModule({
  declarations: [
    CustomerComponent,
    DashboardComponent,
    CartComponent,
    PlaceOrderComponent,
    MyOrdersComponent,
    ViewOrderedProductsComponent,
    ReviewOrderedProductComponent,
    ViewProductDetailComponent,
    ViewWishlistComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    MatButton,
    MatCard,
    MatDivider,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    HttpClientModule,
    DemoAngularMaterialModule
  ]
})
export class CustomerModule { }
