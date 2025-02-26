import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Diet Plan',
  },
  {
    path: 'result',
    component: ResultComponent,
    title: 'Diet Plan - Resultado',
  },
];
