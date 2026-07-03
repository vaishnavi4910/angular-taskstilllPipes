import { Component, signal } from '@angular/core';
import { StudentRegistration } from './components/student-registration/student-registration';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentRegistration],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentapp');
}