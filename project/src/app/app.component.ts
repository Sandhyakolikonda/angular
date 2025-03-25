import { Component } from '@angular/core';
import { MyservicesService } from './myservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  recipes:any = {};
  constructor(public as:MyservicesService){
    this.as.getData().subscribe((res)=>this.recipes=res)
  }
  
}
