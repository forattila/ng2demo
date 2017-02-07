/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DumbIntervalListComponent } from './dumb-interval-list.component';

describe('DumbIntervalListComponent', () => {
  let component: DumbIntervalListComponent;
  let fixture: ComponentFixture<DumbIntervalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbIntervalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbIntervalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
