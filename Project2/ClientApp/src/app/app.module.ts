import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';

import {
  NavMenuComponent,
  FetchDataComponent,
  CounterComponent,
  HomeComponent,
  PrivateRoomComponent,
  LeftMenuComponent
} from './components';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    PrivateRoomComponent,
    FetchDataComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [HttpClient,{provide: LOCALE_ID, useValue:'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
