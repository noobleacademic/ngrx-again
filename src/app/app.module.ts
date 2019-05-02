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
import { PeopleComponent } from './components/user_home/people/people.component';
import { HomeuserComponent } from './components/user_home/homeuser/homeuser.component';
import { ManagementComponent } from './components/user_home/management/management.component';
import { FacultyComponent } from './components/user_home/faculty/faculty.component';
import { StudentComponent } from './components/user_home/student/student.component';
import { ParentComponent } from './components/user_home/parent/parent.component';
import { EditListComponent } from './components/user_home/edit-list/edit-list.component';
import { LogoComponent } from './components/uploading/logo/logo.component';

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
            PeopleComponent,
            HomeuserComponent,
            ManagementComponent,
            FacultyComponent,
            StudentComponent,
            ParentComponent,
            EditListComponent,
            LogoComponent
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
