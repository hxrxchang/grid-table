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
        rbi: 30,
        additionalComment: '琉球の風に乗って'
      },
      {
        name: '大和',
        image: '',
        battingAverage: 0.285,
        homerunCount: 0,
        rbi: 20,
        additionalComment: '敵はすぐ目の前だ'
      },
      {
        name: 'ロペス',
        image: '',
        battingAverage: 0.285,
        homerunCount: 30,
        rbi: 100,
        additionalComment: '勝利のかかる痺れる瞬間'
      },
      {
        name: '筒香',
        image: '',
        battingAverage: 0.285,
        homerunCount: 30,
        rbi: 100,
        additionalComment: '横浜に輝く大砲'
      },
      {
        name: 'ソト',
        image: '',
        battingAverage: 0.285,
        homerunCount: 40,
        rbi: 120,
        additionalComment: '見せつけてやれパワフルスイング'
      }
    ];
  }
}
