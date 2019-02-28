/**
 @Author  Vinu Sagar
 Licensed to Notyfyd.com*/
import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {CommonModule} from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from './auth-routing';

@NgModule({
      declarations: [
            LoginComponent
      ],
      imports: [
            CommonModule,
            AuthRoutingModule
      ],
      providers: [],
      bootstrap: []
})
export class AuthModule{
}

