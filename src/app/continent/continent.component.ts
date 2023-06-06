import { Component, OnInit } from '@angular/core';
import { ContinentService } from '../services/continent.service';
import { Continent, Country } from '../models';
import { map } from 'rxjs';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss'],
})
export class ContinentComponent implements OnInit {
  continents: (Continent & { orgHierarchy: string[] })[] = [];
  columnDefs: any[];
  defaultColDef: any;

  constructor(private continentService: ContinentService) {
    this.columnDefs = [
      {
        headerName: 'Name',
        field: 'name',
        filter: true,
        cellRenderer: 'agGroupCellRenderer',
        cellRendererParams: {
          suppressCount: true,
        },
      },
      { headerName: 'Countries', field: 'numberOfCountries' },
      { headerName: 'Deserts', field: 'numberOfDeserts' },
      { headerName: 'Area', field: 'area' },
      { headerName: 'Location', field: 'location' },
      { headerName: 'Population', field: 'population' },
    ];

    this.defaultColDef = {
      flex: 1,
      minWidth: 150,
      resizable: true,
    };
  }

  autoGroupColumnDef = {
    field: 'name',
    minWidth: 250,
    cellRendererParams: {
      suppressCount: true,
    },
  };

  ngOnInit() {
    this.continentService
      .getContinents()
      .pipe(
        map((continents) =>
          continents.map((c) => ({ ...c, orgHierarchy: [c.name] }))
        )
      )
      .subscribe((continents) => {
        this.continents = continents;
        console.log(continents);
      });
  }

  getDataPath = (data: any) => data.orgHierarchy || null;
}
