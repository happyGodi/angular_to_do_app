import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    title: 'Landing page',
    component: LandingComponent,
    children: [
      { path: '', title: 'Sign In', component: SigninComponent},
      { path: 'sign-up', title: 'Sign Up', component: SignupComponent}
    ]
 },
 {
  path: 'home',
  title: 'Home Page',
  component: HomeComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
