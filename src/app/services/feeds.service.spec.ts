import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FeedsService } from './feeds.service';

describe('FeedsService', () => {
  let service: FeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedsService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
