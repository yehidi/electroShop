import { Injectable } from '@angular/core';
import {HttpClient,} from '@angular/common/http';
import {Observable} from 'rxjs';
import{Product} from '../models/product';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productUrl=environment.productsUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl);
  }


  addProduct(name: string, category:string, description:string,price:number,countInStock:number): Observable<Product>{
    console.log("here");
    return this.http.post<Product>(this.productUrl,
       {name:name,
        category:category,
        imageUrl:"test",
        description:description,
        price:price,
        countInStock:countInStock
      }
       );
  }

  getProduct(id:string):Observable<Product>{
    const url=`${this.productUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  updateProduct(id:string,name:string,description:string,category:string,price:number,countInStock:number):Observable<Product>{
    const url=`${this.productUrl}/${id}`;
    return this.http.patch<Product>(this.productUrl,{name:name,description:description,category:category,price:price,countInStock:countInStock});
  }

  deleteProduct(id: string): Observable<Product>{
    const url=`${this.productUrl}/${id}`;
    return this.http.delete<Product>(url);
  }

  scrape(): Observable<any> {
    const url = `${this.productUrl}/scrape`;
    return this.http.get(url);
  }

}