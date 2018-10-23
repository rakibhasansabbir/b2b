import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductList } from '../models/ProductList';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productsUrl = `https://laraeapi.herokuapp.com/api/products`;
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductList> {
    return this.http.get<ProductList>(this.productsUrl);
  }
}
