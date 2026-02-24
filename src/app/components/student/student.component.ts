import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentHeaderComponent } from './student-header/student-header.component';
import { FeaturesComponent } from '../../sections/features/features.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, StudentHeaderComponent, FeaturesComponent, FooterComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  codingPlatforms = [
    {
      name: 'LeetCode',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
      bgColor: 'linear-gradient(135deg, #FFA116 0%, #FF6B00 100%)',
      url: 'https://leetcode.com',
      description: 'Practice coding problems'
    },
    {
      name: 'HackerRank',
      logo: 'https://hrcdn.net/fcore/assets/work/header/hackerrank_logo-21e2867566.svg',
      bgColor: 'linear-gradient(135deg, #2EC866 0%, #00B35C 100%)',
      url: 'https://hackerrank.com',
      description: 'Coding challenges & certifications'
    },
    {
      name: 'CodeChef',
      logo: 'https://cdn.codechef.com/images/cc-logo.svg',
      bgColor: 'linear-gradient(135deg, #5B4638 0%, #352419 100%)',
      url: 'https://codechef.com',
      description: 'Competitive programming'
    },
    {
      name: 'Codeforces',
      logo: 'https://sta.codeforces.com/s/0/favicon-96x96.png',
      bgColor: 'linear-gradient(135deg, #1F8ACB 0%, #11649C 100%)',
      url: 'https://codeforces.com',
      description: 'Programming contests'
    },
    {
      name: 'GeeksforGeeks',
      logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png',
      bgColor: 'linear-gradient(135deg, #2F8D46 0%, #1A6533 100%)',
      url: 'https://geeksforgeeks.org',
      description: 'Learn & practice DSA'
    }
  ];

  onLogout(): void {
    console.log('User logged out');
  }

  onNavigate(section: string): void {
    console.log('Navigated to section:', section);
  }

  openPlatform(url: string): void {
    window.open(url, '_blank');
  }
}
