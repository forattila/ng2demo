import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent, FirstComponent, SecondComponent} from './components/index'

export const NG2DEMO_ROUTES : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  }
];
