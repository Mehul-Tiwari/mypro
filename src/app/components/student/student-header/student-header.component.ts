import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss']
})
export class StudentHeaderComponent {
  @Output() logout = new EventEmitter<void>();
  @Output() navigate = new EventEmitter<string>();

  onLogout(): void {
    this.logout.emit();
  }

  navigateToSection(section: string): void {
    const sectionMap: Record<string, string> = {
      assignment: 'assignment-section',
      leave: 'leave-section',
      course: 'course-section',
      schedule: 'schedule-section',
      notice: 'notice-section',
      projects: 'project-section'
    };

    const targetId = sectionMap[section];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      this.navigate.emit(section);
    }
  }
}
