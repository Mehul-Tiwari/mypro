import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CourseItem {
  title: string;
  level: string;
  description: string;
  videoTitle: string;
  videoUrl: string;
}

@Component({
  selector: 'app-course-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-modal.component.html',
  styleUrls: ['./course-modal.component.scss']
})
export class CourseModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  courses: CourseItem[] = [
    {
      title: 'IMCA Fundamentals',
      level: 'Beginner',
      description: 'Core concepts of computer applications and data handling.',
      videoTitle: 'IMCA Intro Lecture',
      videoUrl: 'https://www.youtube.com/watch?v=HcOc7P5BMi4'
    },
    {
      title: 'DAA (Design & Analysis of Algorithms)',
      level: 'Intermediate',
      description: 'Algorithm design techniques with complexity analysis.',
      videoTitle: 'DAA Full Course',
      videoUrl: 'https://www.youtube.com/watch?v=pkYVOmU3MgA'
    },
    {
      title: 'Web Development',
      level: 'Beginner',
      description: 'HTML, CSS, and modern web development basics.',
      videoTitle: 'Web Development Crash Course',
      videoUrl: 'https://www.youtube.com/watch?v=G3e-cpL7ofc'
    },
    {
      title: 'C Programming',
      level: 'Beginner',
      description: 'Learn syntax, pointers, and memory basics in C.',
      videoTitle: 'C Programming Tutorial',
      videoUrl: 'https://www.youtube.com/watch?v=KJgsSFOSQv0'
    },
    {
      title: 'C++ Programming',
      level: 'Intermediate',
      description: 'Object-oriented programming and STL fundamentals.',
      videoTitle: 'C++ Full Course',
      videoUrl: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y'
    },
    {
      title: '.NET (C#) Basics',
      level: 'Beginner',
      description: 'C# language essentials and .NET fundamentals.',
      videoTitle: 'C# and .NET Tutorial',
      videoUrl: 'https://www.youtube.com/watch?v=GhQdlIFylQ8'
    },
    {
      title: 'Python Programming',
      level: 'Beginner',
      description: 'Python syntax, data structures, and scripting.',
      videoTitle: 'Python Full Course',
      videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc'
    }
  ];

  closeModal() {
    this.close.emit();
  }
}
