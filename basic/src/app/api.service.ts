import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   constructor(public hc:HttpClient) {
    this.hc.get('https://fakestoreapi.com/products')

   }
   getData(){
    return this.hc.get('https://fakestoreapi.com/products')
   }
}
