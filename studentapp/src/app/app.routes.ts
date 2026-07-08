import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Login } from './login/login';
import { Register } from './register/register';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  }
];