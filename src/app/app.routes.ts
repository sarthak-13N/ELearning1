import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import {  HomeComponent} from "./home/home.component";
import { NotFoundComponentComponent } from "./not-found-component/not-found-component.component";

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }