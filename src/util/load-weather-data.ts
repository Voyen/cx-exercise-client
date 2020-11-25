import CityWeatherEntry from '../interfaces/city-weather-entry';

const loadWeatherData = async (name: string): Promise<CityWeatherEntry> => {
  const url = `http://localhost:3000/search/${name}`;

  const response = await fetch(url, { mode: 'cors' });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const retVal = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return retVal;
};

export default loadWeatherData;
