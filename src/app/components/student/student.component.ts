import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHeaderComponent } from './student-header/student-header.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, StudentHeaderComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  onLogout(): void {
    console.log('User logged out');
  }
}
