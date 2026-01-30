import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProjectFile {
  name: string;
  type: 'file' | 'folder';
  size?: string;
  lastModified?: string;
  content?: string;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  visibility: 'public' | 'private';
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  files: ProjectFile[];
  readme: string;
}

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  currentView: 'options' | 'public' | 'private' | 'repo-detail' | 'file-viewer' = 'options';
  selectedRepo: Repository | null = null;
  selectedFile: ProjectFile | null = null;
  fileContent = '';
  isEditingFile = false;
  showCreateForm = false;
  uploadingFile = false;

  // Form data for creating new repository
  newRepoData = {
    name: '',
    description: '',
    visibility: 'public' as 'public' | 'private',
    readme: ''
  };

  publicRepos: Repository[] = [
    {
      id: 1,
      name: 'student-management-system',
      description: 'A comprehensive student management system built with Angular and Node.js',
      visibility: 'public',
      language: 'TypeScript',
      stars: 12,
      forks: 3,
      updatedAt: '2 days ago',
      files: [
        { name: 'src', type: 'folder' },
        { name: 'README.md', type: 'file', size: '4 KB', lastModified: '2 days ago', content: '# Student Management System\n\nA modern web application for managing student records, assignments, and attendance.\n\n## Features\n- Student registration\n- Assignment tracking\n- Attendance management\n\n## Tech Stack\n- Angular 17\n- Node.js\n- MongoDB' },
        { name: 'package.json', type: 'file', size: '2 KB', lastModified: '1 week ago', content: '{\n  "name": "student-management",\n  "version": "1.0.0",\n  "dependencies": {\n    "@angular/core": "^17.0.0"\n  }\n}' },
        { name: 'tsconfig.json', type: 'file', size: '1 KB', lastModified: '1 week ago', content: '{\n  "compilerOptions": {\n    "target": "ES2022",\n    "module": "ES2022"\n  }\n}' }
      ],
      readme: '# Student Management System\n\nA modern web application for managing student records, assignments, and attendance.\n\n## Features\n- Student registration\n- Assignment tracking\n- Attendance management\n\n## Tech Stack\n- Angular 17\n- Node.js\n- MongoDB'
    },
    {
      id: 2,
      name: 'ecommerce-website',
      description: 'Full-stack e-commerce platform with payment integration',
      visibility: 'public',
      language: 'JavaScript',
      stars: 8,
      forks: 2,
      updatedAt: '5 days ago',
      files: [
        { name: 'client', type: 'folder' },
        { name: 'server', type: 'folder' },
        { name: 'README.md', type: 'file', size: '3 KB', lastModified: '5 days ago' },
        { name: 'package.json', type: 'file', size: '1 KB', lastModified: '1 week ago' }
      ],
      readme: '# E-Commerce Website\n\nOnline shopping platform with secure payment gateway.\n\n## Features\n- Product catalog\n- Shopping cart\n- Payment integration\n- Order tracking'
    }
  ];

  privateRepos: Repository[] = [
    {
      id: 3,
      name: 'personal-notes',
      description: 'Private repository for class notes and study materials',
      visibility: 'private',
      language: 'Markdown',
      stars: 0,
      forks: 0,
      updatedAt: '1 day ago',
      files: [
        { name: 'Notes', type: 'folder' },
        { name: 'README.md', type: 'file', size: '1 KB', lastModified: '1 day ago' }
      ],
      readme: '# Personal Notes\n\nPrivate collection of class notes and study materials.'
    },
    {
      id: 4,
      name: 'practice-projects',
      description: 'Collection of practice coding projects',
      visibility: 'private',
      language: 'Python',
      stars: 0,
      forks: 0,
      updatedAt: '3 days ago',
      files: [
        { name: 'algorithms', type: 'folder' },
        { name: 'data-structures', type: 'folder' },
        { name: 'README.md', type: 'file', size: '2 KB', lastModified: '3 days ago' }
      ],
      readme: '# Practice Projects\n\nVarious coding exercises and practice projects.'
    }
  ];

  closeModal() {
    this.currentView = 'options';
    this.selectedRepo = null;
    this.showCreateForm = false;
    this.resetForm();
    this.close.emit();
  }

  selectView(view: 'public' | 'private') {
    this.currentView = view;
  }

  backToOptions() {
    this.currentView = 'options';
    this.selectedRepo = null;
    this.showCreateForm = false;
  }

  backToList() {
    this.selectedRepo = null;
    this.showCreateForm = false;
  }

  viewRepository(repo: Repository) {
    this.selectedRepo = repo;
  }

  openCreateForm() {
    this.showCreateForm = true;
  }

  closeCreateForm() {
    this.showCreateForm = false;
    this.resetForm();
  }

  resetForm() {
    this.newRepoData = {
      name: '',
      description: '',
      visibility: this.currentView === 'public' ? 'public' : 'private',
      readme: ''
    };
  }

  createRepository() {
    if (!this.newRepoData.name) {
      alert('Please enter a repository name');
      return;
    }

    const newRepo: Repository = {
      id: Date.now(),
      name: this.newRepoData.name,
      description: this.newRepoData.description,
      visibility: this.newRepoData.visibility,
      language: 'Unknown',
      stars: 0,
      forks: 0,
      updatedAt: 'Just now',
      files: [
        { name: 'README.md', type: 'file', size: '1 KB', lastModified: 'Just now' }
      ],
      readme: this.newRepoData.readme || '# ' + this.newRepoData.name
    };

    if (this.currentView === 'public') {
      this.publicRepos.unshift(newRepo);
    } else {
      this.privateRepos.unshift(newRepo);
    }

    this.closeCreateForm();
    alert('Repository created successfully!');
  }

  getLanguageColor(language: string): string {
    const colors: { [key: string]: string } = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'Markdown': '#083fa1',
      'Unknown': '#8b949e'
    };
    return colors[language] || '#8b949e';
  }

  onFileUpload(event: any, visibility: 'public' | 'private') {
    const file = event.target.files[0];
    if (!file) return;

    this.uploadingFile = true;

    // Read file content
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const content = e.target.result;

      const newRepo: Repository = {
        id: Date.now(),
        name: file.name.replace(/\.[^/.]+$/, ''),
        description: `Uploaded file: ${file.name}`,
        visibility: visibility,
        language: this.getFileLanguage(file.name),
        stars: 0,
        forks: 0,
        updatedAt: 'Just now',
        files: [
          { name: file.name, type: 'file', size: this.formatFileSize(file.size), lastModified: 'Just now', content: content },
          { name: 'README.md', type: 'file', size: '1 KB', lastModified: 'Just now', content: `# ${file.name}\n\nUploaded on ${new Date().toLocaleDateString()}` }
        ],
        readme: `# ${file.name}\n\nUploaded on ${new Date().toLocaleDateString()}`
      };

      if (visibility === 'public') {
        this.publicRepos.unshift(newRepo);
      } else {
        this.privateRepos.unshift(newRepo);
      }

      this.uploadingFile = false;
      alert(`File uploaded successfully to ${visibility} repository!`);
      event.target.value = '';
    };

    reader.readAsText(file);
  }

  getFileLanguage(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    const languageMap: { [key: string]: string } = {
      'ts': 'TypeScript',
      'js': 'JavaScript',
      'py': 'Python',
      'md': 'Markdown',
      'java': 'Java',
      'cpp': 'C++',
      'c': 'C',
      'html': 'HTML',
      'css': 'CSS'
    };
    return languageMap[ext || ''] || 'Unknown';
  }

  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  }

  openFile(file: ProjectFile) {
    if (file.type === 'folder') return;
    
    this.selectedFile = file;
    this.fileContent = file.content || '';
    this.isEditingFile = false;
    this.currentView = 'file-viewer';
  }

  closeFileViewer() {
    this.currentView = 'repo-detail';
    this.selectedFile = null;
    this.fileContent = '';
    this.isEditingFile = false;
  }

  enableEdit() {
    this.isEditingFile = true;
  }

  saveFile() {
    if (this.selectedFile && this.selectedRepo) {
      // Find and update the file in the repository
      const fileIndex = this.selectedRepo.files.findIndex(f => f.name === this.selectedFile!.name);
      if (fileIndex !== -1) {
        this.selectedRepo.files[fileIndex].content = this.fileContent;
        this.selectedRepo.files[fileIndex].lastModified = 'Just now';
        this.selectedRepo.updatedAt = 'Just now';
      }
      
      this.isEditingFile = false;
      alert('File saved successfully!');
    }
  }

  cancelEdit() {
    this.fileContent = this.selectedFile?.content || '';
    this.isEditingFile = false;
  }
}
