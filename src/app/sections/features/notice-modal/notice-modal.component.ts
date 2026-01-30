import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Notice {
  id: number;
  message: string;
  time: string;
  isAdmin: boolean;
}

@Component({
  selector: 'app-notice-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notice-modal.component.html',
  styleUrls: ['./notice-modal.component.scss']
})
export class NoticeModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  notices: Notice[] = [
    {
      id: 1,
      message: 'Welcome to the new semester! Classes will begin from February 1st, 2026.',
      time: '10:30 AM',
      isAdmin: true
    },
    {
      id: 2,
      message: 'Assignment submission deadline for DAA is extended to Feb 5th.',
      time: '11:15 AM',
      isAdmin: true
    },
    {
      id: 3,
      message: 'Sports day scheduled for Feb 15th. Register with your class coordinator.',
      time: '2:45 PM',
      isAdmin: true
    },
    {
      id: 4,
      message: 'Library will remain closed on Feb 10th for maintenance.',
      time: '4:20 PM',
      isAdmin: true
    }
  ];

  closeModal() {
    this.close.emit();
  }
}
