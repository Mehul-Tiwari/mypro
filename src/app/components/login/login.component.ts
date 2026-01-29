import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();

  loginForm: FormGroup;
  userType: string = 'student';
  isLoading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  switchUserType(type: string): void {
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

    // Simulate API call
    setTimeout(() => {
      if (credentials.email && credentials.password) {
        console.log(`${this.userType} logged in successfully:`, credentials);
        this.errorMessage = '';
        this.loginSuccess.emit();
      } else {
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
      this.isLoading = false;
    }, 1500);
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
