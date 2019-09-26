import { Injectable } from '@angular/core';
import { Player } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlayerQuery {
  constructor() {}

  fetchPlayers(): Player[] {
    return [
      {
        name: '神里',
        image: '',
        battingAverage: 0.285,
        homerunCount: 9,
        rbi: 30
      }
    ];
  }
}
