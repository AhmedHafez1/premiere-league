import { Country } from './country';

export interface Continent {
  name: string;
  numberOfCountries: number;
  numberOfDeserts: number;
  area: number;
  location: string;
  population: number;
  countries: Country[];
}
