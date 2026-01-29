import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentModalComponent } from './assignment-modal/assignment-modal.component';
import { LeaveModalComponent } from './leave-modal/leave-modal.component';
import { CourseModalComponent } from './course-modal/course-modal.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, AssignmentModalComponent, LeaveModalComponent, CourseModalComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements AfterViewInit, OnDestroy {
  isModalOpen = false;
  isLeaveModalOpen = false;
  isCourseModalOpen = false;

  activeSection: 'assignment' | 'leave' | 'course' | null = null;
  private observer?: IntersectionObserver;

  features: Feature[] = [
    {
      icon: '📚',
      title: 'Assignment',
      description: ''
    },
    {
      icon: '👥',
      title: 'Apply Leave',
      description: ''
    },
    {
      icon: '🏆',
      title: 'Course',
      description: ''
    }
  ];

  openAssignmentModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  openLeaveModal() {
    this.isLeaveModalOpen = true;
  }

  closeLeaveModal() {
    this.isLeaveModalOpen = false;
  }

  openCourseModal() {
    this.isCourseModalOpen = true;
  }

  closeCourseModal() {
    this.isCourseModalOpen = false;
  }

  ngAfterViewInit(): void {
    const sectionIds: Array<{ id: string; key: 'assignment' | 'leave' | 'course' }> = [
      { id: 'assignment-section', key: 'assignment' },
      { id: 'leave-section', key: 'leave' },
      { id: 'course-section', key: 'course' }
    ];

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sectionIds.find((s) => s.id === entry.target.id);
            if (match) {
              this.activeSection = match.key;
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        this.observer?.observe(el);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
