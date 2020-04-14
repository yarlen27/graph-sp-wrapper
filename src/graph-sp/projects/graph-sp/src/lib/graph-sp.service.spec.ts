import { TestBed } from '@angular/core/testing';

import { GraphSpService } from './graph-sp.service';

describe('GraphSpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphSpService = TestBed.get(GraphSpService);
    expect(service).toBeTruthy();
  });
});
