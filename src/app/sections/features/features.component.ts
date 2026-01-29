import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentModalComponent } from './assignment-modal/assignment-modal.component';
import { LeaveModalComponent } from './leave-modal/leave-modal.component';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, AssignmentModalComponent, LeaveModalComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  isModalOpen = false;
  isLeaveModalOpen = false;

  features: Feature[] = [
    {
      icon: '📚',
      title: 'Assignment',
      description: ''
    },
    {
      icon: '👥',
      title: 'Apply Leave',
      description: 'Learn from industry professionals and experienced educators'
    },
    {
      icon: '🏆',
      title: 'Certifications',
      description: 'Earn recognized certificates upon course completion'
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
}
