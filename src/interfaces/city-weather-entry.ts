export default interface CityWeatherEntry {
  id: number;
  name: string;
  country: string;
  details: CityWeatherEntryDetails[];
}

interface CityWeatherEntryDetails {
  temp: number;
  description: string;
  cloudiness: number;
  timestamp: string;
}
