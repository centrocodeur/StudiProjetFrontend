import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserStorageService} from "../../services/storage/user-storage.service";

const BASIC_URL= "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addCategory(categoryDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ 'api/admin/category', categoryDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getAllCategories(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin', {
      headers: this.createAuthorizationHeaders(),
    })
  }


  getAllProducts(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/products', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getProductById(productId): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getAllProductsByName(name:any): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/admin/search/${name}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  addProduct(productDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ 'api/admin/product', productDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  updateProduct(productId: any, productDto:any): Observable<any>{
    return  this.http.put(BASIC_URL+ `api/admin/product/${productId}`, productDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  deleteProduct(productId: any): Observable<any>{
    return  this.http.delete(BASIC_URL+ `api/admin/product/${productId}`,  {
      headers: this.createAuthorizationHeaders(),
    })
  }

  addCoupon(couponDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ 'api/admin/coupons', couponDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getCoupons(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/coupons', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getPlacerOrders(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/placedOrders', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  changeOrderStatus(orderId:number, status: string): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/admin/order/${orderId}/${status}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  postFAQ(productId:number, faqDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ `api/admin/faq/${productId}`, faqDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getAnalytics(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/admin/order/analytics', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  private createAuthorizationHeaders(): HttpHeaders{
    return new HttpHeaders().set('Authorization', 'Bearer '+ UserStorageService.getToken())
  }
}
