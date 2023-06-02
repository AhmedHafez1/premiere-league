import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';
import { rowData } from '../dummy.data';
@Component({
  selector: 'app-premier-league-grid',
  templateUrl: './premier-league-grid.component.html',
  styleUrls: ['./premier-league-grid.component.scss'],
})
export class PremierLeagueGridComponent implements OnInit {
  rowData = rowData;
  columnDefs: ColDef[] = [
    { headerName: 'Team Name', field: 'team_name' },
    { headerName: 'Position', field: 'overall_league_position' },
    { headerName: 'Wins', field: 'overall_league_W' },
    { headerName: 'Draws', field: 'overall_league_D' },
    { headerName: 'Losses', field: 'overall_league_L' },
    { headerName: 'Points', field: 'overall_league_PTS' },
  ];
  gridOptions: any = {
    pagination: true,
    paginationPageSize: 10,
    rowSelection: 'multiple',
  };

  constructor() {}

  ngOnInit() {}
}
