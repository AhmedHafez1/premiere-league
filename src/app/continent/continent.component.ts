import { Component, OnInit } from '@angular/core';
import { ContinentService } from '../services/continent.service';
import { Continent, Country } from '../models';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss'],
})
export class ContinentComponent implements OnInit {
  continents: Continent[] = [];
  columnDefs: any[];

  constructor(private continentService: ContinentService) {
    this.columnDefs = [
      { headerName: 'Continent', field: 'name' },
      { headerName: 'Number of Countries', field: 'numberOfCountries' },
      { headerName: 'Number of Deserts', field: 'numberOfDeserts' },
      { headerName: 'Area', field: 'area' },
      { headerName: 'Location', field: 'location' },
      { headerName: 'Population', field: 'population' },
      {
        headerName: 'Country',
        field: 'countries',
        valueGetter: this.getCountryNames,
      },
    ];
  }

  ngOnInit() {
    this.continentService.getContinents().subscribe((continents) => {
      this.continents = continents;
    });
  }

  getCountryNames(params: any) {
    const countries: Country[] = params.data.countries;
    return countries.map((country) => country.name).join(', ');
  }
}
