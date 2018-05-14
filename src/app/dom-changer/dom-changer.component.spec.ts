import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomChangerComponent } from './dom-changer.component';

describe('DomChangerComponent', () => {
  let component: DomChangerComponent;
  let fixture: ComponentFixture<DomChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomChangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
