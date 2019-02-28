import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth-module/auth.module';
import {AuthRoutingModule} from './auth-module/auth-routing';

@NgModule({
      declarations: [
            AppComponent
      ],
      imports: [
            BrowserModule,
            BrowserAnimationsModule,
            AuthModule,
            AuthRoutingModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
