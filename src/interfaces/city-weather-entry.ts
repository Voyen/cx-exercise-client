export default interface CityWeatherEntry {
  id: number;
  name: string;
  country: string;
  cachedAt: number;
  details: CityWeatherEntryDetails[];
}

export interface CityWeatherEntryDetails {
  temp: number;
  description: string;
  cloudiness: number;
  timestamp: string;
  epoch: number;
}
