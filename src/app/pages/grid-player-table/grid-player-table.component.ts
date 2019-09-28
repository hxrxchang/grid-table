import { Component, OnInit } from '@angular/core';
import { players } from 'src/data/players';

@Component({
  selector: 'app-grid-player-table',
  templateUrl: './grid-player-table.component.html',
  styleUrls: ['./grid-player-table.component.scss']
})
export class GridPlayerTableComponent implements OnInit {
  constructor() {}

  playerList = players;

  ngOnInit() {
    console.log(this.playerList);
  }
}
