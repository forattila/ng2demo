import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import {NG2DEMO_ROUTES} from './routes';
import { HomeComponent } from './components/home/home.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

import {IntervalService} from './services/index';
import { IntervalListComponent } from './components/interval-list/interval-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    SecondComponent,
    IntervalListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(NG2DEMO_ROUTES)
  ],
  providers: [        
    Location,    
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    IntervalService],    
  bootstrap: [AppComponent]
})
export class AppModule { }
