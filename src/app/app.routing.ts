import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from './services/auth-guard.service';
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {ProfileComponent} from "./components/user/profile/profile.component"
//====================================================================
import { NewsComponent } from './components/news/news.component';

import { AboutComponent } from './components/about/about.component';
import { YoiuComponent } from './components/yoiu/yoiu.component';
import { SplashComponent } from './components/splash/splash.component';
//====================================================================


const APP_ROUTES : Routes = [
  { path : '', component : SplashComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'about', component: AboutComponent},
  { path : 'yoiu', component: YoiuComponent},
  { path : 'user' , component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'user/:uid/news' , component: NewsComponent, canActivate: [AuthGuard]},
 
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
