import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  GetContextMenuItemsParams,
  MenuItemDef,
} from 'ag-grid-community';
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

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };

  gridOptions: any = {
    pagination: true,
    paginationPageSize: 17,
    rowSelection: 'multiple',
    onSelectionChanged: this.onSelectionChanged.bind(this),
  };

  constructor() {}

  ngOnInit() {}

  onSelectionChanged() {
    const selectedRows = this.gridOptions.api?.getSelectedRows();
    console.log(selectedRows);
  }

  clearCell(params: any) {
    console.log(params.node.data);
  }

  getContextMenuItems(
    params: GetContextMenuItemsParams
  ): (string | MenuItemDef)[] {
    var result: (string | MenuItemDef)[] = [
      {
        // custom item
        name: 'Alert ' + params.value,
        action: () => {
          window.alert('Alerting about ' + params.value);
        },
        cssClasses: ['redFont', 'bold'],
      },
      {
        // custom item
        name: 'Always Disabled',
        disabled: true,
        tooltip:
          'Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!',
      },
      {
        name: 'Country',
        subMenu: [
          {
            name: 'Syria',
            action: () => {
              console.log('Syria was pressed');
            },
            icon: createFlagImg('sy'),
          },
          {
            name: 'Egypt',
            action: () => {
              console.log('Egypt was pressed');
            },
            icon: createFlagImg('eg'),
          },
          {
            name: 'Palestine',
            action: () => {
              console.log('Palestine was pressed');
            },
            icon: createFlagImg('ps'),
          },
        ],
      },
      {
        name: 'Person',
        subMenu: [
          {
            name: 'Niall',
            action: () => {
              console.log('Niall was pressed');
            },
          },
          {
            name: 'Sean',
            action: () => {
              console.log('Sean was pressed');
            },
          },
          {
            name: 'John',
            action: () => {
              console.log('John was pressed');
            },
          },
          {
            name: 'Alberto',
            action: () => {
              console.log('Alberto was pressed');
            },
          },
        ],
      },
      'separator',
      {
        // custom item
        name: 'Windows',
        shortcut: 'Alt + W',
        action: () => {
          console.log('Windows Item Selected');
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />',
      },
      {
        // custom item
        name: 'Mac',
        shortcut: 'Alt + M',
        action: () => {
          console.log('Mac Item Selected');
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      'separator',
      {
        // custom item
        name: 'Checked',
        checked: true,
        action: () => {
          console.log('Checked Selected');
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      'copy',
      'separator',
      'chartRange',
    ];
    return result;
  }
}

function createFlagImg(flag: string) {
  return (
    '<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/' +
    flag +
    '.png"/>'
  );
}
