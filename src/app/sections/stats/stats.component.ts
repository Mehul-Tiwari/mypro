import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  number: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  stats: Stat[] = [
    {
      number: '50K+',
      label: 'Active Students'
    },
    {
      number: '200+',
      label: 'Expert Instructors'
    },
    {
      number: '1000+',
      label: 'Courses Available'
    },
    {
      number: '95%',
      label: 'Success Rate'
    }
  ];
}
