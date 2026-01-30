import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CourseItem {
  title: string;
  level: string;
  description: string;
  videoTitle: string;
  videoUrl: string;
  thumbnail?: string;
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
      title: 'HTML Complete Course',
      level: 'Beginner',
      description: 'Complete 4 hour HTML course with project code, certificate, and notes from Ex-Amazon instructor.',
      videoTitle: 'HTML Complete 4 Hour Course',
      videoUrl: 'https://youtu.be/rklidcZ-aLU?si=96rIGpyK9qeMjlxp',
      thumbnail: 'https://i.ytimg.com/vi/rklidcZ-aLU/maxresdefault.jpg'
    },
    {
      title: 'IMCA Fundamentals',
      level: 'Beginner',
      description: 'Core concepts of computer applications and data handling.',
      videoTitle: 'IMCA Intro Lecture',
      videoUrl: 'https://www.youtube.com/watch?v=HcOc7P5BMi4',
      thumbnail: 'https://i.ytimg.com/vi/HcOc7P5BMi4/maxresdefault.jpg'
    },
    {
      title: 'DAA (Design & Analysis of Algorithms)',
      level: 'Intermediate',
      description: 'Algorithm design techniques with complexity analysis.',
      videoTitle: 'DAA Full Course',
      videoUrl: 'https://www.youtube.com/watch?v=pkYVOmU3MgA',
      thumbnail: 'https://i.ytimg.com/vi/pkYVOmU3MgA/maxresdefault.jpg'
    },
    {
      title: 'Web Development',
      level: 'Beginner',
      description: 'HTML, CSS, and modern web development basics.',
      videoTitle: 'Web Development Crash Course',
      videoUrl: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
      thumbnail: 'https://i.ytimg.com/vi/G3e-cpL7ofc/maxresdefault.jpg'
    },
    {
      title: 'C Programming',
      level: 'Beginner',
      description: 'Learn syntax, pointers, and memory basics in C.',
      videoTitle: 'C Programming Tutorial',
      videoUrl: 'https://www.youtube.com/watch?v=KJgsSFOSQv0',
      thumbnail: 'https://i.ytimg.com/vi/KJgsSFOSQv0/maxresdefault.jpg'
    },
    {
      title: 'C++ Programming',
      level: 'Intermediate',
      description: 'Object-oriented programming and STL fundamentals.',
      videoTitle: 'C++ Full Course',
      videoUrl: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y',
      thumbnail: 'https://i.ytimg.com/vi/vLnPwxZdW4Y/maxresdefault.jpg'
    },
    {
      title: '.NET (C#) Basics',
      level: 'Beginner',
      description: 'C# language essentials and .NET fundamentals.',
      videoTitle: 'C# and .NET Tutorial',
      videoUrl: 'https://www.youtube.com/watch?v=GhQdlIFylQ8',
      thumbnail: 'https://i.ytimg.com/vi/GhQdlIFylQ8/maxresdefault.jpg'
    },
    {
      title: 'Python Programming',
      level: 'Beginner',
      description: 'Python syntax, data structures, and scripting.',
      videoTitle: 'Python Full Course',
      videoUrl: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
      thumbnail: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg'
    }
  ];

  closeModal() {
    this.close.emit();
  }
}
