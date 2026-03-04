import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherHeaderComponent } from './teacher-header/teacher-header.component';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule, TeacherHeaderComponent],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  constructor() {}
}
