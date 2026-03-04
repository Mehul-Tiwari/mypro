import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'student',
    component: StudentComponent,
    canActivate: [AuthGuard],
    data: { role: 'student' }
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    canActivate: [AuthGuard],
    data: { role: 'teacher' }
  },
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
