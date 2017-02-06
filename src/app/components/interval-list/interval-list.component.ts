import { Component, OnInit } from '@angular/core';
import {IntervalService} from '../../services/index';
import {RouteInterval} from '../../model/index';

@Component({
  selector: 'app-interval-list',
  templateUrl: './interval-list.component.html',
  styleUrls: ['./interval-list.component.scss']
})
export class IntervalListComponent implements OnInit {

  private routeIntervals:Array<RouteInterval>;

  constructor(private intervalService:IntervalService) {      
   }

  ngOnInit() {
    this.intervalService.routeIntervals$.subscribe(intervals=>{
        this.routeIntervals = intervals;
      })
  }

}
