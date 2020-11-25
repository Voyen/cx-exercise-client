import CityWeatherEntry from './city-weather-entry';

export default interface SavedItineraryEntry {
  id?: number;
  name: string;
  cities: string[];
}
