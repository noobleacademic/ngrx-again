import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {LandingPageComponent} from './components/nooble-home/landing-page/landing-page.component';
import {AboutNoobleComponent} from './components/nooble-home/about-nooble/about-nooble.component';
import {ForParentComponent} from './components/nooble-home/for-parent/for-parent.component';
import {ForInstitutionComponent} from './components/nooble-home/for-institution/for-institution.component';
import {LoginComponent} from './components/login/login.component';
import {PeopleComponent} from './components/user_home/people/people.component';
import {HomeuserComponent} from './components/user_home/homeuser/homeuser.component';
import {ManagementComponent} from './components/user_home/management/management.component';
import {FacultyComponent} from './components/user_home/faculty/faculty.component';
import {StudentComponent} from './components/user_home/student/student.component';
import {ParentComponent} from './components/user_home/parent/parent.component';
import {EditListComponent} from './components/user_home/edit-list/edit-list.component';
import {LogoComponent} from './components/uploading/logo/logo.component';




const routes: Routes = [
      { path: '', component: LandingPageComponent },
      { path: 'about',component: AboutNoobleComponent},
      {path: 'for-parents',component: ForParentComponent},
      {path: 'for-institutions',component: ForInstitutionComponent}, 
      { path: 'login', component: LoginComponent },
      {path:'homeuser',component:HomeuserComponent},
      {path: 'people',component:PeopleComponent},
      {path:'management',component:ManagementComponent},
      {path:'faculty',component:FacultyComponent},
      {path:'student',component:StudentComponent},
      {path:'parent',component:ParentComponent},
      {path:'edit_list',component:EditListComponent},
      {path:'logo',component:LogoComponent}
      //     { path: 'resetuserpassword', loadChildren: './forgot-password/user-reset-password/user-reset-password.module#UserResetPasswordModule' }
      ];

@NgModule({

      imports: [RouterModule.forRoot(routes)],

      exports: [RouterModule]

})

export class AppRoutingModule{}
