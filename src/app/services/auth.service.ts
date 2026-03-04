import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  role: 'student' | 'teacher';
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {}

  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  /**
   * Get current user role
   */
  getUserRole(): 'student' | 'teacher' | null {
    return this.currentUserSubject.value?.role || null;
  }

  /**
   * Login function
   */
  login(email: string, password: string, role: 'student' | 'teacher'): Observable<User> {
    return new Observable(observer => {
      // Simulate API call
      setTimeout(() => {
        const user: User = {
          id: Math.random().toString(36).substr(2, 9),
          email: email,
          role: role,
          name: email.split('@')[0]
        };

        // Store in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Update subject
        this.currentUserSubject.next(user);
        observer.next(user);
        observer.complete();
      }, 1000);
    });
  }

  /**
   * Logout function
   */
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  /**
   * Get user from storage
   */
  private getUserFromStorage(): User | null {
    try {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  }
}
