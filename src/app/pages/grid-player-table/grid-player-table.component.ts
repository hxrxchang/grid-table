import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models';
import { PlayerQuery } from 'src/app/queries/player.query';

@Component({
  selector: 'app-grid-player-table',
  templateUrl: './grid-player-table.component.html',
  styleUrls: ['./grid-player-table.component.scss']
})
export class GridPlayerTableComponent implements OnInit {
  constructor(private query: PlayerQuery) {}

  playerList = this.query.fetchPlayers;

  ngOnInit() {}
}
