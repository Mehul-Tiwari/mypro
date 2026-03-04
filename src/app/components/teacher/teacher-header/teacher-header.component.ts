import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-teacher-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-header.component.html',
  styleUrls: ['./teacher-header.component.scss']
})
export class TeacherHeaderComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToSection(section: string): void {
    const sectionMap: Record<string, string> = {
      home: 'home-section',
      profile: 'profile-section',
      attendance: 'attendance-section',
      grades: 'grades-section',
      assignments: 'assignments-section',
      submissions: 'submissions-section',
      announcements: 'announcements-section',
      reports: 'reports-section'
    };

    const targetId = sectionMap[section];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
