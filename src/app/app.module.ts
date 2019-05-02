import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import {AppRoutingModule} from './auth.routing';
import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponent } from './components/nooble-home/landing-page/landing-page.component';
import { AboutNoobleComponent } from './components/nooble-home/about-nooble/about-nooble.component';
import { FooterComponent } from './components/nooble-home/footer/footer.component';
import { ForInstitutionComponent } from './components/nooble-home/for-institution/for-institution.component';
import { ForParentComponent } from './components/nooble-home/for-parent/for-parent.component';
import { NavHeaderComponent } from './components/nooble-home/nav-header/nav-header.component';
import { InviteInstitutionComponent } from './components/invite-institution/invite-institution.component';
import { UserResetPasswordComponent } from './components/forgot-password/user-reset-password/user-reset-password.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HomeUserComponent } from './components/User_home/userhome/home-user.component';
import { PortalPagesComponent } from './components/User_home/portal-pages/portal-pages.component';
import { ManageFeesComponent } from './components/User_home/manage-fees/manage-fees.component';
import { PeoplesComponent } from './components/User_home/peoples/peoples.component';
import { DashboardComponent } from './components/User_home/dashboard/dashboard.component';
import { OfflinePaymentsComponent } from './components/User_home/offline-payments/offline-payments.component';
import { FacultyComponent } from './components/User_home/peoples/faculty/faculty.component';
import { ParentsComponent } from './components/User_home/peoples/parents/parents.component';
import { EditListComponent } from './components/User_home/peoples/edit-list/edit-list.component';
import { ManagementComponent } from './components/User_home/peoples/management/management.component';
import { StudentsComponent } from './components/User_home/peoples/students/students.component';
import { AddInstitutionComponent } from './components/User_home/add-institution/add-institution.component';
import { NewCreationComponent } from './components/User_home/peoples/edit-list/new-creation/new-creation.component';
import { IndvidalUploadComponent } from './components/User_home/peoples/management/indvidal-upload/indvidal-upload.component';
import { BulkUploadComponent } from './components/User_home/peoples/management/bulk-upload/bulk-upload.component';

@NgModule({
      declarations: [
            AppComponent,
            LoginComponent,
            LandingPageComponent,
            AboutNoobleComponent,
            FooterComponent,
            ForInstitutionComponent,
            ForParentComponent,
            NavHeaderComponent,
            InviteInstitutionComponent,
            UserResetPasswordComponent,
            HomeUserComponent,
            PortalPagesComponent,
            ManageFeesComponent,
            PeoplesComponent,
            DashboardComponent,
            OfflinePaymentsComponent,
            FacultyComponent,
            ParentsComponent,
            EditListComponent,
            ManagementComponent,
            StudentsComponent,
            AddInstitutionComponent,
            NewCreationComponent,
            IndvidalUploadComponent,
            BulkUploadComponent
      ],
      imports: [
            BrowserModule,
            BrowserAnimationsModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            MatInputModule,
            MatFormFieldModule,
            MatCardModule,
            FlexLayoutModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
