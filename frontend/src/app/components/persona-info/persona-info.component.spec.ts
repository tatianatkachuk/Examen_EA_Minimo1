import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaInfoComponent } from './persona-info.component';

describe('PersonaInfoComponent', () => {
  let component: PersonaInfoComponent;
  let fixture: ComponentFixture<PersonaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
