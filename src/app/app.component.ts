import {Component, ViewEncapsulation, ElementRef} from '@angular/core';
import {RouteInterval} from './model/index';
import {IntervalService} from './services/index';

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  private navItems : Array<any> = [
    {name: 'First', route: 'first'},
    {name: 'Second', route: 'second'}
  ];
  
  private routeIntervals:Array<RouteInterval>;

  constructor(private intervalService: IntervalService){
    this.routeIntervals = this.intervalService.routeIntervals;
  }
}
