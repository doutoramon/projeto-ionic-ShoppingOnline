import { TestBed } from '@angular/core/testing';

import { ServiceColinsService } from './service-colins.service';

describe('ServiceColinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceColinsService = TestBed.get(ServiceColinsService);
    expect(service).toBeTruthy();
  });
});
