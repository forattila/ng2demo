import { Component,Input,ChangeDetectionStrategy, OnInit } from '@angular/core';
import {RouteInterval} from '../../model/index';

@Component({
  selector: 'app-dumb-interval-list',
  templateUrl: './dumb-interval-list.component.html',
  styleUrls: ['./dumb-interval-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DumbIntervalListComponent implements OnInit {

  @Input() routeIntervals:Array<RouteInterval>;
  

  constructor() { }

  ngOnInit() {
  }

}
