import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  products:any=[]
  constructor(public as:ApiService){
    this.as.getData().subscribe((res)=> this.products=res)
  }
  
}
