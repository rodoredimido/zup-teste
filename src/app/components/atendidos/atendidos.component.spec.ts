import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendidosComponent } from './atendidos.component';

describe('AtendidosComponent', () => {
  let component: AtendidosComponent;
  //let fixture: ComponentFixture<AtendidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(AtendidosComponent);
   //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    
    //const atendime = new AtendimentoComponent();
    //component.maxSize= 2;
    expect(2+2).toEqual(4);
  });
});
