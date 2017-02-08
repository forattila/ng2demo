import {Injectable} from '@angular/core';
import {RouteInterval} from '../model/index';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class IntervalService {

  private routeIntervalsSubject : BehaviorSubject <Array <RouteInterval>> = new BehaviorSubject <Array <RouteInterval>> ([]);

  public routeIntervals$ : Observable <Array <RouteInterval>>;

  private routeIntervals : Array <RouteInterval>;

  constructor() {
    this.routeIntervals$ = this
      .routeIntervalsSubject
      .asObservable();

    this
      .routeIntervals$
      .subscribe(intervals => {
        this.routeIntervals = intervals;
      });
  }

  public startInterval(name : string) : string {
    let newInterval = new RouteInterval(new Date(), name);
    this
      .routeIntervalsSubject
      .next([
        ...this.routeIntervals,
        newInterval
      ]);
    return newInterval.Id;
  }

  public endInterval(id : string) {
    let interval = this
      .routeIntervals
      .find(i => i.Id === id);
    if (interval) {
      interval.endTimeStamp = new Date();
      interval.interval = (interval.endTimeStamp.getTime() - interval.startTimeStamp.getTime()) / 1000;
    }
    this
      .routeIntervalsSubject
      .next([...this.routeIntervals]);
  }

}
