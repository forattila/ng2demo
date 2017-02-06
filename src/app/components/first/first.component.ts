import { Component, OnInit,OnDestroy } from '@angular/core';
import {ComponentBase} from '../common/componentBase';
import {RouteInterval} from '../../model/index';
import {IntervalService} from '../../services/index';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent extends ComponentBase implements OnInit, OnDestroy{

  constructor(intervalService: IntervalService) { 
     super(intervalService);
  }

  ngOnInit() {
    super.ngOnInit('first');
  }

  ngOnDestroy(){    
    super.ngOnDestroy();
  }

}
