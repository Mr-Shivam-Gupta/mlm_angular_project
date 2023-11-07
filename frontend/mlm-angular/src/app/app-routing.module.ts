import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { RegisterscreenComponent } from './pages/registerscreen/registerscreen.component';

const routes: Routes = [
  { path: 'signup', component: RegisterscreenComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: AppComponent }
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
