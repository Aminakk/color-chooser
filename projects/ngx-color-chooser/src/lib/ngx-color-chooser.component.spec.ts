import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxColorChooserComponent } from './ngx-color-chooser.component';

describe('NgxColorChooserComponent', () => {
  let component: NgxColorChooserComponent;
  let fixture: ComponentFixture<NgxColorChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxColorChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxColorChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
