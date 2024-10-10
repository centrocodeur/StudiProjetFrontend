import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-view-ordered-products',
  templateUrl: './view-ordered-products.component.html',
  styleUrl: './view-ordered-products.component.css'
})
export class ViewOrderedProductsComponent implements OnInit{

orderId:any= this.activatedRouter.snapshot.params['orderId'];  // get orderId from url
orderedProductDetailsList=[];
totalAmount: any;
  constructor(private activatedRouter: ActivatedRoute,
              private customerService: CustomerService,) {
  }

  ngOnInit(): void {
    this.getOrderedProductsDetailsByOrderId();
  }


  getOrderedProductsDetailsByOrderId(){
    this.customerService.getOrderedProducts(this.orderId).subscribe(res=>{
      res.productDtoList.forEach(element=>{
        element.processedImg= 'data:image/jpeg;base64,' + element.byteImg;
        this.orderedProductDetailsList.push(element);
      });
      this.totalAmount=res.orderAmount;
    });

  }


}
