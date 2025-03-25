import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-gayathri',
  standalone: false,
  templateUrl: './gayathri.component.html',
  styleUrl: './gayathri.component.css'
})
export class GayathriComponent {
  m=""
  constructor(public ms:MyserviceService){
  
      if (this.m.trim()) {
        this.ms.receiveMsg()
   
        this.m= ''; // Clear the input field
      }
    }
  }

  
  



