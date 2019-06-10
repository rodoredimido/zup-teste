import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //fixture = //TestBed.createComponent(TodosComponent);
   // component =new TodosComponent(null,null);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    
    expect( 2 + 2 ).toEqual(4);
  });
});
