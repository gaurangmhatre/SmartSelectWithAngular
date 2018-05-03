import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTypeboxComponent } from './smart-typebox.component';

describe('SmartTypeboxComponent', () => {
  let component: SmartTypeboxComponent;
  let fixture: ComponentFixture<SmartTypeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartTypeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTypeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
