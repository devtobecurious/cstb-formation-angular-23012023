import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCommunComponent } from './code-commun.component';

describe('CodeCommunComponent', () => {
  let component: CodeCommunComponent;
  let fixture: ComponentFixture<CodeCommunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeCommunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeCommunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
