import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
    // component: Dashboard
    // loadChildren:() =>
    //   import('./dashboard/dashboard.routes').then(m => m.routes)
  },
  {
    path: 'teacherprofile',
    loadComponent: () => import('./teacherprofile/teacherprofile').then(m => m.Teacherprofile)
  },
  {
    path: 'studentprofile',
    loadComponent: () => import('./studentprofile/studentprofile').then(m => m.Studentprofile)
  },
  {
    path: 'studentprofile/:email',
    loadComponent: () => import('./studentprofile/detail/detail').then(m => m.Detail)
  },
  {
    path: 'teacherprofile/:email',
    loadComponent: () => import('./teacherprofile/details/details').then(m => m.Details)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: "full" }
];