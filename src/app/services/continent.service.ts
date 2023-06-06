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
      children: [
        {
          name: 'Egypt',
          area: 1002450,
          location: 'Northern Africa',
          population: 91207000,
          orgHierarchy: ['Africa', 'Egypt'],
        },
        {
          name: 'South Africa',
          area: 1221037,
          location: 'Southern Africa',
          population: 55653654,
          orgHierarchy: ['Africa', 'Southern Africa'],
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
      children: [
        {
          name: 'China',
          area: 9640011,
          location: 'Eastern Asia',
          population: 1439323776,
          orgHierarchy: ['Asia', 'China'],
        },
        {
          name: 'India',
          area: 3287263,
          location: 'Southern Asia',
          population: 1393409038,
          orgHierarchy: ['Asia', 'India'],
        },
      ],
    },
  ];

  getContinents(): Observable<Continent[]> {
    return of(this.continents);
  }
}
