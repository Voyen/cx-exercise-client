import { Action } from 'easy-peasy';
import CityWeatherEntry from './city-weather-entry';

export default interface ItineraryModel {
  entries: CityWeatherEntry[];
  addEntry: Action<ItineraryModel, CityWeatherEntry>;
  removeEntry: Action<ItineraryModel, number>;
  clear: Action<ItineraryModel>;
}
