import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { FeaturesComponent } from '../../sections/features/features.component';
import { StatsComponent } from '../../sections/stats/stats.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, StudentHeaderComponent, FeaturesComponent, StatsComponent, TestimonialsComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  onLogout(): void {
    console.log('User logged out');
  }
}
