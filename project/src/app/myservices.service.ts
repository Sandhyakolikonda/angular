import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  constructor(public hc:HttpClient) {
    this.hc.get('https://dummyjson.com/recipes')
   }
   getData(){
   return this.hc.get('https://dummyjson.com/recipes')
   }
}
