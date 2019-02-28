/**
 @Author  Vinu Sagar
 Licensed to Notyfyd.com*/

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
      {path: '', component: LoginComponent}
];
@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AuthRoutingModule{}
