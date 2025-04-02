import { Component } from '@angular/core';

@Component({
  selector: 'app-strengths',
  standalone: false,
  templateUrl: './strengths.component.html',
  styleUrl: './strengths.component.css'
})
export class StrengthsComponent {
  strengthsLeft = [
    'Eagerness to learn',
    'Strong academic knowledge',
    'Problem-solving skills',
    'Critical thinking',
    'Leadership qualities',
    'Teamwork'
  ];

  strengthsRight = [
    'Communication skills',
    'Time management',
    'Creativity',
    'Positive attitude',
    'Technical proficiency',
    'Individual & group work capability'
  ];
}

  

