import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {LandingPageComponent} from './components/nooble-home/landing-page/landing-page.component';
import {AboutNoobleComponent} from './components/nooble-home/about-nooble/about-nooble.component';
import {ForParentComponent} from './components/nooble-home/for-parent/for-parent.component';
import {ForInstitutionComponent} from './components/nooble-home/for-institution/for-institution.component';
import {HomeUserComponent} from './components/User_home/userhome/home-user.component';
import {DashboardComponent} from './components/User_home/dashboard/dashboard.component';
import {ManageFeesComponent} from './components/User_home/manage-fees/manage-fees.component';
import {OfflinePaymentsComponent} from './components/User_home/offline-payments/offline-payments.component';
import {PeoplesComponent} from './components/User_home/peoples/peoples.component';
import {PortalPagesComponent} from './components/User_home/portal-pages/portal-pages.component';
import {FacultyComponent} from './components/User_home/peoples/faculty/faculty.component';
import {ParentsComponent} from './components/User_home/peoples/parents/parents.component';
import {EditListComponent} from './components/User_home/peoples/edit-list/edit-list.component';
import {ManagementComponent} from './components/User_home/peoples/management/management.component';
import {StudentsComponent} from './components/User_home/peoples/students/students.component';
import {AddInstitutionComponent} from './components/User_home/add-institution/add-institution.component';
import {NewCreationComponent} from './components/User_home/peoples/edit-list/new-creation/new-creation.component';
import {LoginComponent} from './components/login/login.component';




const routes: Routes = [
      { path: '', component: LandingPageComponent },
      { path: 'about',component: AboutNoobleComponent},
      { path: 'login',component: LoginComponent},
      {path: 'for-parents',component: ForParentComponent},
      {path: 'for-institutions',component: ForInstitutionComponent}, 
      { path: 'portalpage', component: PortalPagesComponent },
      { path: 'managefee', component: ManageFeesComponent },
      { path: 'peoples', component: PeoplesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'offlinepayments', component: OfflinePaymentsComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'faculty', component:FacultyComponent },
      { path: 'parents', component: ParentsComponent },
      { path: 'list-edit', component: EditListComponent },
      { path: 'student', component: StudentsComponent },
      { path: 'addinstituiton', component: AddInstitutionComponent },
      { path: 'createnewlist', component: NewCreationComponent },
      { path: 'homeuser', component: HomeUserComponent },
      { path: 'homeuser', component: HomeUserComponent },
      
      { path: 'homeuser', component: HomeUserComponent }
      
      //     { path: 'resetuserpassword', loadChildren: './forgot-password/user-reset-password/user-reset-password.module#UserResetPasswordModule' }
      ];

@NgModule({
      
      imports: [RouterModule.forRoot(routes)],

      exports: [RouterModule]

})

export class AppRoutingModule{}
