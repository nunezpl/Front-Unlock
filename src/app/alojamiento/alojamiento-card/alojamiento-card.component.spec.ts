import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojamientoCardComponent } from './alojamiento-card.component';

describe('AlojamientoCardComponent', () => {
  let component: AlojamientoCardComponent;
  let fixture: ComponentFixture<AlojamientoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlojamientoCardComponent]
    });
    fixture = TestBed.createComponent(AlojamientoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
