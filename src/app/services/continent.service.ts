import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Continent } from '../models/continent';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private continents: Continent[] = [
    {
      name: 'Africa',
      numberOfCountries: 54,
      numberOfDeserts: 3,
      area: 30370000,
      location: 'Earth',
      population: 1300000000,
      countries: [
        {
          name: 'Egypt',
          area: 1002450,
          location: 'Northern Africa',
          population: 91207000,
        },
        {
          name: 'South Africa',
          area: 1221037,
          location: 'Southern Africa',
          population: 55653654,
        },
      ],
    },
    {
      name: 'Asia',
      numberOfCountries: 48,
      numberOfDeserts: 5,
      area: 44579000,
      location: 'Earth',
      population: 4600000000,
      countries: [
        {
          name: 'China',
          area: 9640011,
          location: 'Eastern Asia',
          population: 1439323776,
        },
        {
          name: 'India',
          area: 3287263,
          location: 'Southern Asia',
          population: 1393409038,
        },
      ],
    },
    {
      name: 'Europe',
      numberOfCountries: 44,
      numberOfDeserts: 0,
      area: 10180000,
      location: 'Earth',
      population: 746419440,
      countries: [
        {
          name: 'Germany',
          area: 357022,
          location: 'Western Europe',
          population: 83149300,
        },
        {
          name: 'France',
          area: 551695,
          location: 'Western Europe',
          population: 66992699,
        },
      ],
    },
    {
      name: 'North America',
      numberOfCountries: 23,
      numberOfDeserts: 3,
      area: 24709000,
      location: 'Earth',
      population: 579024000,
      countries: [
        {
          name: 'United States',
          area: 9629091,
          location: 'North America',
          population: 331002651,
        },
        {
          name: 'Canada',
          area: 9976140,
          location: 'North America',
          population: 38005238,
        },
      ],
    },
  ];

  getContinents(): Observable<Continent[]> {
    return of(this.continents);
  }
}
