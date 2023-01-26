import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesBisComponent } from './observables-bis.component';

describe('ObservablesBisComponent', () => {
  let component: ObservablesBisComponent;
  let fixture: ComponentFixture<ObservablesBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ObservablesBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
