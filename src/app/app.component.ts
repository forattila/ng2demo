import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

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
  
  constructor(){    
  }
}
