import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import {  HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { CourseListComponent} from "./course-list/course-list.component"
import {PaymentComponent} from "./payment/payment.component"
import {CourseGotComponent} from "./course-got/course-got.component"
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainVideoComponent } from './main-video/main-video.component';
import { RowListComponentComponent } from './row-list-component/row-list-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    {path : 'course' , component:CourseListComponent},
    { path: 'payment', component: PaymentComponent },
    { path: 'gotCourse', component: CourseGotComponent },
    {path :"play" ,component:MainVideoComponent},
    {
      path :"notes" ,component:RowListComponentComponent
    }
    
  // { path: '**', component: NotFoundComponentComponent }
];
