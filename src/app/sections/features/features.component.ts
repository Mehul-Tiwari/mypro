import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { AssignmentModalComponent } from './assignment-modal/assignment-modal.component';
import { LeaveModalComponent } from './leave-modal/leave-modal.component';
import { CourseModalComponent } from './course-modal/course-modal.component';
import { NoticeModalComponent } from './notice-modal/notice-modal.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, AssignmentModalComponent, LeaveModalComponent, CourseModalComponent, NoticeModalComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements AfterViewInit, OnDestroy {
  isModalOpen = false;
  isLeaveModalOpen = false;
  isCourseModalOpen = false;
  isScheduleModalOpen = false;
  isNoticeModalOpen = false;
  isProjectModalOpen = false;

  activeSection: 'assignment' | 'leave' | 'course' | null = null;
  private observer?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
    },
    {
      icon: '🎓',
      title: 'Schedule',
      description: ''
    },
    {
      icon: '📄',
      title: 'Notice',
      description: ''
    },
    {
      icon: '💼',
      title: 'Project',
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

  openScheduleModal() {
    this.isScheduleModalOpen = true;
  }

  closeScheduleModal() {
    this.isScheduleModalOpen = false;
  }

  openNoticeModal() {
    this.isNoticeModalOpen = true;
  }

  closeNoticeModal() {
    this.isNoticeModalOpen = false;
  }

  openProjectModal() {
    this.isProjectModalOpen = true;
  }

  closeProjectModal() {
    this.isProjectModalOpen = false;
  }

  ngAfterViewInit(): void {
    // Only run IntersectionObserver in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

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
