import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { QuillEditorModule } from 'ngx-quill-editor';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Routing } from './app.routing';
import { UserService } from './services/user.service.client';
import { NewsServices } from './services/news.service.client';
import { PageService } from './services/page.service.client';
import {SharedService} from './services/shared.service.client'
import {AuthGuard} from './services/auth-guard.service';
import { NewsComponent } from './components/news/news.component';
import { SplashComponent } from './components/splash/splash.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NewsComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpModule,
    QuillEditorModule
  ],
  providers: [
    UserService, 
    PageService,
    NewsServices, 
    SharedService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
