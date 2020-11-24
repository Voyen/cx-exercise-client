import { Action } from 'easy-peasy';
import CityWeatherEntry from './city-weather-entry';

export default interface CityWeatherModel {
  entries: CityWeatherEntry[];
  addEntry: Action<CityWeatherModel, CityWeatherEntry>;
}
