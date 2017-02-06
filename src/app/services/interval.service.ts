import { Injectable } from '@angular/core';
import {RouteInterval} from '../model/index';

@Injectable()
export class IntervalService {

  public routeIntervals: Array<RouteInterval> = new Array<RouteInterval>();

  constructor() { }

}
