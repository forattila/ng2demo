import {Injectable} from '@angular/core';
import {RouteInterval} from '../model/index';
import {Store} from '@ngrx/store';
import {IAppStore} from '../interfaces/index';
import {RouteIntervalActions} from '../reducers/index';

@Injectable()
export class IntervalService {


  private routeIntervals : Array < RouteInterval >;

  constructor(private store: Store<IAppStore>) {    
    this
      .store.select(s=>s.routeIntervals)
      .subscribe(intervals => {
        this.routeIntervals = intervals;
      });
  }

  public startInterval(name : string) : string {
    let newInterval = new RouteInterval({startTimeStamp:new Date, name:name});
    this.store.dispatch({type:RouteIntervalActions.ADD_ROUTEINTERVAL,payload:newInterval});
    return newInterval.Id;
  }

  public endInterval(id : string) {
    let modInterval:RouteInterval = null;
    let interval = this
      .routeIntervals
      .find(i => i.Id === id);            
    if (interval) {      
      modInterval = new RouteInterval(interval);
    }    
    modInterval.endTimeStamp = new Date();
    modInterval.interval = (modInterval.endTimeStamp.getTime() - modInterval.startTimeStamp.getTime()) / 1000;
    this.store.dispatch({type:RouteIntervalActions.MODIFY_ROUTEINTERVAL,payload:modInterval});
  }

}
