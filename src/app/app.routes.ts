import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import {  HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent }
  // { path: '**', component: NotFoundComponentComponent }
];
