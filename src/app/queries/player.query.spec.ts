import { TestBed } from '@angular/core/testing';

import { PlayerQuery } from './player.query';

describe('PlayerQuery', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const playerQuery: PlayerQuery = TestBed.get(PlayerQuery);
    expect(playerQuery).toBeTruthy();
  });
});
