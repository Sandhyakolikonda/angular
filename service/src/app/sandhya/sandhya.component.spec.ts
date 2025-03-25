import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandhyaComponent } from './sandhya.component';

describe('SandhyaComponent', () => {
  let component: SandhyaComponent;
  let fixture: ComponentFixture<SandhyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SandhyaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandhyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
