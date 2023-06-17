import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewboarddetailComponent } from './viewboarddetail.component';

describe('ViewboarddetailComponent', () => {
  let component: ViewboarddetailComponent;
  let fixture: ComponentFixture<ViewboarddetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewboarddetailComponent]
    });
    fixture = TestBed.createComponent(ViewboarddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
