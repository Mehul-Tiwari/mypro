import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, User } from '../../../services/auth.service';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  currentUser: User | null = null;
  userInitials = '';

  activities = [
    { date: '2 days ago', action: 'Submitted assignment', course: 'Mathematics' },
    { date: '1 week ago', action: 'Completed quiz', course: 'Physics' },
    { date: '2 weeks ago', action: 'Attended class', course: 'Chemistry' },
    { date: '3 weeks ago', action: 'Submitted project', course: 'Computer Science' },
    { date: '1 month ago', action: 'Applied for leave', course: 'General' }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.userInitials = this.getInitials(this.currentUser.name);
    }
  }

  private getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}
