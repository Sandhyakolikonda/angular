import { Component } from '@angular/core';

@Component({
  selector: 'app-registrationform',
  standalone: false,
  templateUrl: './registrationform.component.html',
  styleUrl: './registrationform.component.css'
})
export class RegistrationformComponent {
  name: string = '';
  email: string = '';
  course: string = 'angular';

  onSubmit() {
    alert(`Name: ${this.name}\nEmail: ${this.email}\nCourse: ${this.course}`);
  }
}


