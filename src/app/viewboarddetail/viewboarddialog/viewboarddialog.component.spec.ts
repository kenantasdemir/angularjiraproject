import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewboarddialogComponent } from './viewboarddialog.component';

describe('ViewboarddialogComponent', () => {
  let component: ViewboarddialogComponent;
  let fixture: ComponentFixture<ViewboarddialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewboarddialogComponent]
    });
    fixture = TestBed.createComponent(ViewboarddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
