import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajuraniComponent } from './rajurani.component';

describe('RajuraniComponent', () => {
  let component: RajuraniComponent;
  let fixture: ComponentFixture<RajuraniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RajuraniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RajuraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
