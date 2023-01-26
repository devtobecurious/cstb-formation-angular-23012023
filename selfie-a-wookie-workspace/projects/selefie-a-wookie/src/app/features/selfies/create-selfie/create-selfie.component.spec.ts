import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSelfieComponent } from './create-selfie.component';

describe('CreateSelfieComponent', () => {
  let component: CreateSelfieComponent;
  let fixture: ComponentFixture<CreateSelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
