import { TestBed } from '@angular/core/testing';

import { ThirdPartyApiService } from './third-party-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ThirdPartyApiService', () => {
  let service: ThirdPartyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ThirdPartyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
