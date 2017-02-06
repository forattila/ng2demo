import { Component, OnInit,OnDestroy } from '@angular/core';
import {ComponentBase} from '../common/componentBase';
import {RouteInterval} from '../../model/index';
import {IntervalService} from '../../services/index';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent extends ComponentBase implements OnInit, OnDestroy {

  constructor(intervalService: IntervalService) { 
     super(intervalService);
  }

  ngOnInit() {
    super.ngOnInit('second');
  }

  ngOnDestroy(){    
    super.ngOnDestroy();
  }

}
