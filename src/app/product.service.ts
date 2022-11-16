import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  aipUrl: string = "https://credo-shoppingcartv5.herokuapp.com/listproducts";

  
HttpRequest():Observable<any> {
  return this.http.get(this.aipUrl);
}



}