import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  userType: 'student' | 'teacher' = 'student';
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  switchUserType(type: 'student' | 'teacher'): void {
    this.userType = type;
    this.errorMessage = '';
    this.loginForm.reset();
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly';
      return;
    }

    this.isLoading = true;
    const credentials = this.loginForm.value;

    // Call auth service
    this.authService.login(credentials.email, credentials.password, this.userType).subscribe({
      next: (user) => {
        this.errorMessage = '';
        console.log(`${this.userType} logged in successfully:`, user);
        
        // Navigate to appropriate dashboard
        if (this.userType === 'student') {
          this.router.navigate(['/student']);
        } else {
          this.router.navigate(['/teacher']);
        }
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please try again.';
        console.error('Login error:', error);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  get emailError(): string {
    const email = this.loginForm.get('email');
    if (email?.hasError('required')) return 'Email is required';
    if (email?.hasError('email')) return 'Please enter a valid email';
    return '';
  }

  get passwordError(): string {
    const password = this.loginForm.get('password');
    if (password?.hasError('required')) return 'Password is required';
    if (password?.hasError('minlength')) return 'Password must be at least 6 characters';
    return '';
  }
}
