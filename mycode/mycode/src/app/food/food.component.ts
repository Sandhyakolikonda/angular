import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-food',
  standalone: false,
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() title="";
  @Input() image="";
}
