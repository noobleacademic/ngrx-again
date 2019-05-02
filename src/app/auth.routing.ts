import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {LandingPageComponent} from './components/nooble-home/landing-page/landing-page.component';
import {AboutNoobleComponent} from './components/nooble-home/about-nooble/about-nooble.component';
import {ForParentComponent} from './components/nooble-home/for-parent/for-parent.component';
import {ForInstitutionComponent} from './components/nooble-home/for-institution/for-institution.component';
import {LoginComponent} from './components/login/login.component';




const routes: Routes = [
      { path: '', component: LandingPageComponent },
      { path: 'about',component: AboutNoobleComponent},
      {path: 'for-parents',component: ForParentComponent},
      {path: 'for-institutions',component: ForInstitutionComponent}, 
      { path: 'login', component: LoginComponent },
      //     { path: 'resetuserpassword', loadChildren: './forgot-password/user-reset-password/user-reset-password.module#UserResetPasswordModule' }
      ];

@NgModule({

      imports: [RouterModule.forRoot(routes)],

      exports: [RouterModule]

})

export class AppRoutingModule{}
