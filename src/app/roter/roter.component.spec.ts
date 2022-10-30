import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoterComponent } from './roter.component';

describe('RoterComponent', () => {
  let component: RoterComponent;
  let fixture: ComponentFixture<RoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
