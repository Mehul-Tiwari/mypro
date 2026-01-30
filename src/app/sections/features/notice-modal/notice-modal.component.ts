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

  newMessage: string = '';

  notices: Notice[] = [
    {
      id: 1,
      message: 'Welcome to the new semester! Classes will begin from February 1st, 2026.',
      time: '10:30 AM',
      isAdmin: true
    },
    {
      id: 2,
      message: 'Thank you for the update! Looking forward to the new semester.',
      time: '10:35 AM',
      isAdmin: false
    },
    {
      id: 3,
      message: 'Assignment submission deadline for DAA is extended to Feb 5th.',
      time: '11:15 AM',
      isAdmin: true
    },
    {
      id: 4,
      message: 'Great! That gives us more time to complete the project.',
      time: '11:20 AM',
      isAdmin: false
    },
    {
      id: 5,
      message: 'Sports day scheduled for Feb 15th. Register with your class coordinator.',
      time: '2:45 PM',
      isAdmin: true
    },
    {
      id: 6,
      message: 'Will register today. Can we participate in multiple events?',
      time: '2:50 PM',
      isAdmin: false
    },
    {
      id: 7,
      message: 'Library will remain closed on Feb 10th for maintenance.',
      time: '4:20 PM',
      isAdmin: true
    },
    {
      id: 8,
      message: 'Noted. Thanks for informing!',
      time: '4:25 PM',
      isAdmin: false
    }
  ];

  closeModal() {
    this.close.emit();
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const currentTime = new Date();
      const timeString = currentTime.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });

      this.notices.push({
        id: this.notices.length + 1,
        message: this.newMessage.trim(),
        time: timeString,
        isAdmin: false
      });

      this.newMessage = '';
      
      // Scroll to bottom after sending
      setTimeout(() => {
        const chatContainer = document.querySelector('.chat-messages');
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }, 100);
    }
  }
}
