import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Computer Science Student',
      message: 'The courses here transformed my career. Excellent instructors and resources!',
      avatar: '👩‍🎓'
    },
    {
      name: 'John Smith',
      role: 'Business Administration',
      message: 'Gained practical knowledge that directly helped in my internship. Highly recommended!',
      avatar: '👨‍💼'
    },
    {
      name: 'Emma Davis',
      role: 'Engineering Student',
      message: 'State-of-the-art facilities and supportive faculty. Best decision I made!',
      avatar: '👩‍🔬'
    }
  ];
}
