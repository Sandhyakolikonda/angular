import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-sandhya',
  standalone: false,
  templateUrl: './sandhya.component.html',
  styleUrl: './sandhya.component.css'
})
export class SandhyaComponent {
  message=''
  constructor(public ms:MyserviceService){}
  receive() {
    this.message= this.ms.receiveMsg()
  }
}