import { Component, OnInit,OnDestroy } from '@angular/core';
import {RouteInterval} from '../../model/index';
import {IntervalService} from '../../services/index';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy{

  currentRouteInterval: RouteInterval;

  constructor(private intervalService: IntervalService) { 

  }

  ngOnInit() {
    this.currentRouteInterval = new RouteInterval(new Date(),'first');
    this.intervalService.routeIntervals.push(this.currentRouteInterval);
  }

  ngOnDestroy(){
    let interval = this.intervalService.routeIntervals.find(i=>i.Id===this.currentRouteInterval.Id);
    this.currentRouteInterval.endTimeStamp = new Date();
    this.currentRouteInterval.interval = (interval.endTimeStamp.getTime()-interval.startTimeStamp.getTime())/1000;
  }

}
