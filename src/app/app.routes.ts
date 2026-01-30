import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'courses', component: CoursesComponent }
];
