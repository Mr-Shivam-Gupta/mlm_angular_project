import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './authentication/page404/page404.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'advance-table',
        loadChildren: () =>
          import('./advance-table/advance-table.module').then(
            (m) => m.AdvanceTableModule
          ),
      },
     
      {
        path: 'team',
        loadChildren: () =>
          import('./team/team.module').then(
            (m) => m.TeamModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./accounts/accounts.module').then(
            (m) => m.AccountsModule
          ),
      },
      {
        path: 'business',
        loadChildren: () =>
          import('./business/business.module').then(
            (m) => m.BusinessModule
          ),
      },
    ],
  },
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  { path: '**', component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
