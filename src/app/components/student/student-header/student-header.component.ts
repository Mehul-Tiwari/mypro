import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '../../../services/auth.service';

@Component({
  selector: 'app-student-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-header.component.html',
  styleUrls: ['./student-header.component.scss']
})
export class StudentHeaderComponent implements OnInit {
  isProfileOpen = false;
  userName = '';
  userEmail = '';
  userInitials = '';
  currentUser: User | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    if (this.currentUser) {
      this.userName = this.currentUser.name || this.currentUser.email.split('@')[0];
      this.userEmail = this.currentUser.email;
      this.userInitials = this.getInitials(this.userName);
    }
  }

  toggleProfileDropdown(): void {
    this.isProfileOpen = !this.isProfileOpen;
  }

  navigateToProfile(): void {
    this.isProfileOpen = false;
    this.router.navigate(['/student/profile']);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToSection(section: string): void {
    const sectionMap: Record<string, string> = {
      home: 'home-section',
      profile: 'profile-section',
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.profile-dropdown');
    if (dropdown && !dropdown.contains(target)) {
      this.isProfileOpen = false;
    }
  }
}
