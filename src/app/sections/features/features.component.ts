import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '📚',
      title: 'Rich Course Library',
      description: 'Access hundreds of courses across multiple disciplines'
    },
    {
      icon: '👥',
      title: 'Expert Instructors',
      description: 'Learn from industry professionals and experienced educators'
    },
    {
      icon: '🏆',
      title: 'Certifications',
      description: 'Earn recognized certificates upon course completion'
    }
  ];
}
