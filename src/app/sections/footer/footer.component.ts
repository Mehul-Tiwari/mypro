import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#course-section' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' }
  ];

  resources = [
    { label: 'Assignments', href: '#assignment-section' },
    { label: 'Schedule', href: '#schedule-section' },
    { label: 'Apply Leave', href: '#leave-section' },
    { label: 'Documents', href: '#docs-section' },
    { label: 'Student Portal', href: '#' }
  ];

  support = [
    { label: 'Help Center', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Technical Support', href: '#' },
    { label: 'Contact Support', href: '#' }
  ];

  legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ];

  contactInfo = {
    address: '123 Education Street, Learning City, State 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@eduhub.edu'
  };

  socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '🐦', name: 'Twitter', url: '#' },
    { icon: '📷', name: 'Instagram', url: '#' },
    { icon: '💼', name: 'LinkedIn', url: '#' },
    { icon: '📺', name: 'YouTube', url: '#' }
  ];
}
