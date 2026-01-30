import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface CourseItem {
  title: string;
  level: string;
  description: string;
  videoTitle: string;
  videoUrl: string;
  thumbnail?: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  constructor(private router: Router) {}

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
      title: 'HTML Tutorial for Beginners',
      level: 'Beginner',
      description: 'Complete HTML with notes and code for beginners.',
      videoTitle: 'HTML Tutorial for Beginners',
      videoUrl: 'https://youtu.be/HcOc7P5BMi4?si=DBRYZQUwHAiJDBFq',
      thumbnail: 'https://i.ytimg.com/vi/HcOc7P5BMi4/maxresdefault.jpg'
    },
    {
      title: 'Data Structures and Algorithms in Python',
      level: 'Intermediate',
      description: 'Full course for beginners covering DSA concepts in Python.',
      videoTitle: 'DSA in Python - Full Course',
      videoUrl: 'https://youtu.be/pkYVOmU3MgA?si=8nEcqwkZwBmx12Ox',
      thumbnail: 'https://i.ytimg.com/vi/pkYVOmU3MgA/maxresdefault.jpg'
    },
    {
      title: 'HTML & CSS Full Course',
      level: 'Beginner',
      description: 'Beginner to Pro - Complete HTML and CSS course.',
      videoTitle: 'HTML & CSS Full Course',
      videoUrl: 'https://youtu.be/G3e-cpL7ofc?si=qUzWikd63ebwMNtR',
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
    },
    {
      title: 'NodeJS Complete Course in Hindi',
      level: 'Beginner',
      description: 'Introduction to NodeJS with notes and certification.',
      videoTitle: 'NodeJS Complete Course',
      videoUrl: 'https://youtu.be/AZzV3wZCvI4?si=HB5oHOi96jSLTkul',
      thumbnail: 'https://i.ytimg.com/vi/AZzV3wZCvI4/maxresdefault.jpg'
    },
    {
      title: 'AI Complete OneShot Course for Beginners',
      level: 'Beginner',
      description: 'Learn AI & ML fundamentals from scratch.',
      videoTitle: 'AI Complete Course',
      videoUrl: 'https://youtu.be/D1eL1EnxXXQ?si=TaOUlU3DPrKooUbB',
      thumbnail: 'https://i.ytimg.com/vi/D1eL1EnxXXQ/maxresdefault.jpg'
    },
    {
      title: 'Generative AI Full Course',
      level: 'Intermediate',
      description: 'Gemini Pro, OpenAI, Llama, Langchain, Pinecone, Vector Databases & More.',
      videoTitle: 'Generative AI Full Course',
      videoUrl: 'https://youtu.be/mEsleV16qdo?si=K31YyfuZ8tFlAIaB',
      thumbnail: 'https://i.ytimg.com/vi/mEsleV16qdo/maxresdefault.jpg'
    },
    {
      title: 'Artificial Intelligence Full Course',
      level: 'Advanced',
      description: 'Artificial Intelligence tutorial for beginners by Edureka.',
      videoTitle: 'Artificial Intelligence Full Course',
      videoUrl: 'https://youtu.be/JMUxmLyrhSk?si=4tevEyAwQmT9uODU',
      thumbnail: 'https://i.ytimg.com/vi/JMUxmLyrhSk/maxresdefault.jpg'
    },
    {
      title: 'Angular Tutorial in Hindi',
      level: 'Beginner',
      description: 'Complete Angular tutorial in Hindi for beginners.',
      videoTitle: 'Angular Tutorial in Hindi',
      videoUrl: 'https://youtu.be/0LhBvp8qpro?si=dN2v4IUi6-bFbgXz',
      thumbnail: 'https://i.ytimg.com/vi/0LhBvp8qpro/maxresdefault.jpg'
    },
    {
      title: 'React vs Angular - Which one to Learn?',
      level: 'Beginner',
      description: 'Comparison between React and Angular frameworks.',
      videoTitle: 'React vs Angular',
      videoUrl: 'https://youtu.be/L1pfd9iHaWw?si=Rf8MNFuY3yd10q0K',
      thumbnail: 'https://i.ytimg.com/vi/L1pfd9iHaWw/maxresdefault.jpg'
    },
    {
      title: 'JavaScript Tutorial (2024) for Beginners to Pro',
      level: 'Beginner',
      description: 'Complete JavaScript tutorial with notes, projects and practice questions.',
      videoTitle: 'JavaScript Tutorial 2024',
      videoUrl: 'https://youtu.be/VlPiVmYuoqw?si=5fr46hJFFxgJ-5I7',
      thumbnail: 'https://i.ytimg.com/vi/VlPiVmYuoqw/maxresdefault.jpg'
    },
    {
      title: 'React JS 19 Full Course in Hindi',
      level: 'Intermediate',
      description: 'Learn React from scratch (2025) in one video.',
      videoTitle: 'React JS 19 Full Course',
      videoUrl: 'https://youtu.be/LuNPCSNr-nE?si=bzWI1h0hHpQfwOzz',
      thumbnail: 'https://i.ytimg.com/vi/LuNPCSNr-nE/maxresdefault.jpg'
    },
    {
      title: 'Cybersecurity Fundamentals',
      level: 'Beginner',
      description: 'Core concepts in cybersecurity: threats, defenses, and best practices. (YouTuber: TBD)',
      videoTitle: 'Cybersecurity Basics (Link TBD)',
      videoUrl: '#'
    },
    {
      title: 'Linux Command Line Essentials',
      level: 'Beginner',
      description: 'Learn essential Linux commands and shell workflows. (YouTuber: TBD)',
      videoTitle: 'Linux CLI Essentials (Link TBD)',
      videoUrl: '#'
    },
    {
      title: 'Networking Basics (CCNA Prep)',
      level: 'Intermediate',
      description: 'Networking fundamentals: IP addressing, routing, and switching. (YouTuber: TBD)',
      videoTitle: 'Networking Basics (Link TBD)',
      videoUrl: '#'
    },
    {
      title: 'Database Design & SQL',
      level: 'Beginner',
      description: 'Relational database design, normalization, and SQL queries. (YouTuber: TBD)',
      videoTitle: 'SQL & Database Design (Link TBD)',
      videoUrl: '#'
    },
    {
      title: 'Cloud Computing Basics (AWS/Azure)',
      level: 'Beginner',
      description: 'Intro to cloud services, compute, storage, and networking. (YouTuber: TBD)',
      videoTitle: 'Cloud Computing Basics (Link TBD)',
      videoUrl: '#'
    },
    {
      title: 'DevOps Fundamentals',
      level: 'Intermediate',
      description: 'CI/CD, containers, and DevOps practices overview. (YouTuber: TBD)',
      videoTitle: 'DevOps Fundamentals (Link TBD)',
      videoUrl: '#'
    },
    {
      title: 'Data Structures & Algorithms (DSA)',
      level: 'Intermediate',
      description: 'Essential DSA topics for interviews and problem-solving. (YouTuber: TBD)',
      videoTitle: 'DSA Fundamentals (Link TBD)',
      videoUrl: '#'
    },
    {
      title: 'System Design Basics',
      level: 'Advanced',
      description: 'Scalable systems, architecture patterns, and design trade-offs. (YouTuber: TBD)',
      videoTitle: 'System Design Basics (Link TBD)',
      videoUrl: '#'
    }
  ];

  goBack() {
    this.router.navigate(['/']);
  }
}
