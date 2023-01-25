import { TestBed } from '@angular/core/testing';

import { CodeCommunService } from './code-commun.service';

describe('CodeCommunService', () => {
  let service: CodeCommunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeCommunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
