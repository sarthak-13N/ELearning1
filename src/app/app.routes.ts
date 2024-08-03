import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import {  HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { CourseListComponent} from "./course-list/course-list.component"
import {PaymentComponent} from "./payment/payment.component"
import {CourseGotComponent} from "./course-got/course-got.component"
import { AsideComponent } from './aside/aside.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    {path : 'course' , component:CourseListComponent},
    { path: 'payment', component: PaymentComponent },
    { path: 'gotCourse', component: CourseGotComponent },
    {path :"play" ,component:AsideComponent},
];
