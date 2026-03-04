import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUser = this.authService.getCurrentUser();

    // If not authenticated, redirect to login
    if (!currentUser) {
      this.router.navigate(['/login']);
      return false;
    }

    // If route requires specific role, check it
    const requiredRole = route.data['role'];
    if (requiredRole && currentUser.role !== requiredRole) {
      // Redirect to appropriate dashboard based on role
      if (currentUser.role === 'student') {
        this.router.navigate(['/student']);
      } else {
        this.router.navigate(['/teacher']);
      }
      return false;
    }

    return true;
  }
}
