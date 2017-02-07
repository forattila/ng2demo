import {Component, OnInit} from '@angular/core';
import {IntervalService} from '../../services/index';
import {RouteInterval} from '../../model/index';
import {Store} from '@ngrx/store';
import {IAppStore} from '../../interfaces/index';

@Component({selector: 'app-interval-list', templateUrl: './interval-list.component.html', styleUrls: ['./interval-list.component.scss']})
export class IntervalListComponent implements OnInit {

  private routeIntervals : Array < RouteInterval >;

  constructor(private store : Store < IAppStore >) {}

  ngOnInit() {
    this
      .store
      .select(s => s.routeIntervals)
      .subscribe(intervals => {
        this.routeIntervals = intervals;
      })
  }

}
