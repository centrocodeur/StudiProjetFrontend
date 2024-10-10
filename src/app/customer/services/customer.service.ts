import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserStorageService} from "../../services/storage/user-storage.service";

const BASIC_URL= "http://localhost:8080/";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any>{
    return  this.http.get(BASIC_URL+ 'api/customer/products', {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getAllProductsByName(name:any): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/customer/search/${name}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  addToCart(productId:any): Observable<any>{
    const cartDto= {
      productId: productId,
      userId : UserStorageService.getUserId()
    }
    return  this.http.post(BASIC_URL+ `api/customer/cart`, cartDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  increaseProductQuantity(productId:any): Observable<any>{
    const cartDto= {
      productId: productId,
      userId : UserStorageService.getUserId(),
    }
    return  this.http.post(BASIC_URL+ `api/customer/addition`, cartDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  decreaseProductQuantity(productId:any): Observable<any>{
    const cartDto= {
      productId: productId,
      userId : UserStorageService.getUserId(),
    }
    return  this.http.post(BASIC_URL+ `api/customer/deduction`, cartDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  getCartByUserId(): Observable<any>{
    const userId = UserStorageService.getUserId()

    return  this.http.get(BASIC_URL+ `api/customer/cart/${userId}`,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  applyCoupon(code: any): Observable<any>{
    const userId = UserStorageService.getUserId()

    return  this.http.get(BASIC_URL+ `api/customer/coupon/${userId}/${code}`,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  placeOrder(orderDto:any ): Observable<any>{
    orderDto.userId = UserStorageService.getUserId()

    return  this.http.post(BASIC_URL+ `api/customer/placeOrder`, orderDto,{
      headers: this.createAuthorizationHeaders(),
    })
  }



  getOrdersByUserId( ): Observable<any>{
   const userId = UserStorageService.getUserId()

    return  this.http.get(BASIC_URL+ `api/customer/myOrders/${userId}`,{
      headers: this.createAuthorizationHeaders(),
    })
  }

  getOrderedProducts(orderId:number): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/customer/ordered-products/${orderId}`, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  giveReview(reviewDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ `api/customer/review`, reviewDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }


  getProductDetailById(productId: number): Observable<any>{
    return  this.http.get(BASIC_URL+ `api/customer/product/${productId}`, {
      headers: this.createAuthorizationHeaders(),
    })

  }

  addProductToWishlist(wishlistDto: any): Observable<any>{
    return  this.http.post(BASIC_URL+ `api/customer/wishlist`, wishlistDto, {
      headers: this.createAuthorizationHeaders(),
    })
  }

  getWishlistByUserId(): Observable<any>{
    const userId= UserStorageService.getUserId();
    return  this.http.get(BASIC_URL+ `api/customer/wishlist/${userId}`,  {
      headers: this.createAuthorizationHeaders(),
    })
  }


  private createAuthorizationHeaders(): HttpHeaders{
    return new HttpHeaders().set('Authorization', 'Bearer '+ UserStorageService.getToken())
  }
}
