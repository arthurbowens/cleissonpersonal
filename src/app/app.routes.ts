import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing/landing.page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
