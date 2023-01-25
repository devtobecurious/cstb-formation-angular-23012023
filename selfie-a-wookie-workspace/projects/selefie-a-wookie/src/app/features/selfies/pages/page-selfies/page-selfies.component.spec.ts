import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSelfiesComponent } from './page-selfies.component';

describe('PageSelfiesComponent', () => {
  let component: PageSelfiesComponent;
  let fixture: ComponentFixture<PageSelfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSelfiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
