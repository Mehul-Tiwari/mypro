import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Student-Teacher Dashboard';
  isLoggedIn = true; // Set to true to show student dashboard

  onLoginSuccess(): void {
    this.isLoggedIn = true;
  }

  onUserLogout(): void {
    this.isLoggedIn = false;
  }
}
