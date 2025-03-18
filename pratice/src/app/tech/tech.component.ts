import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech',
  standalone: false,
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {
  @Input() title="";
  @Input() image="";
 
}
