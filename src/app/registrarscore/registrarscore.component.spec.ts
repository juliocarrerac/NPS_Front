import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarscoreComponent } from './registrarscore.component';

describe('RegistrarscoreComponent', () => {
  let component: RegistrarscoreComponent;
  let fixture: ComponentFixture<RegistrarscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarscoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
