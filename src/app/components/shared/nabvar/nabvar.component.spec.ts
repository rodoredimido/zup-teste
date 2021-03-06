import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarComponent } from './nabvar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NabvarComponent', () => {
  let component: NabvarComponent;
  let fixture: ComponentFixture<NabvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NabvarComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
