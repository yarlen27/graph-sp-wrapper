import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSpComponent } from './graph-sp.component';

describe('GraphSpComponent', () => {
  let component: GraphSpComponent;
  let fixture: ComponentFixture<GraphSpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphSpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
