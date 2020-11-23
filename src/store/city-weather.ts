import CityWeatherModel from '../interfaces/city-weather-model';

const CityWeatherStore: CityWeatherModel = {
  entries: [
    // static dummy entry for now...
    {
      id: 2078025,
      name: 'Adelaide',
      country: 'AU',
      details: [
        {
          temp: 15.8, description: 'few clouds', cloudiness: 24.0, timestamp: '2020-11-23 12:00:00',
        },
        {
          temp: 15.09, description: 'scattered clouds', cloudiness: 40.0, timestamp: '2020-11-23 15:00:00',
        },
        {
          temp: 13.17, description: 'broken clouds', cloudiness: 51.0, timestamp: '2020-11-23 18:00:00',
        },
        {
          temp: 16.68, description: 'broken clouds', cloudiness: 67.0, timestamp: '2020-11-24 12:00:00',
        },
        {
          temp: 16.24, description: 'clear sky', cloudiness: 9.0, timestamp: '2020-11-24 15:00:00',
        },
        {
          temp: 16.48, description: 'clear sky', cloudiness: 5.0, timestamp: '2020-11-24 18:00:00',
        },
        {
          temp: 20.38, description: 'clear sky', cloudiness: 0.0, timestamp: '2020-11-25 12:00:00',
        },
        {
          temp: 18.9, description: 'clear sky', cloudiness: 0.0, timestamp: '2020-11-25 15:00:00',
        },
        {
          temp: 18.73, description: 'clear sky', cloudiness: 0.0, timestamp: '2020-11-25 18:00:00',
        },
        {
          temp: 22.69, description: 'clear sky', cloudiness: 0.0, timestamp: '2020-11-26 12:00:00',
        },
        {
          temp: 23.2, description: 'broken clouds', cloudiness: 60.0, timestamp: '2020-11-26 15:00:00',
        },
        {
          temp: 23.65, description: 'broken clouds', cloudiness: 66.0, timestamp: '2020-11-26 18:00:00',
        },
        {
          temp: 26.83, description: 'clear sky', cloudiness: 0.0, timestamp: '2020-11-27 12:00:00',
        },
        {
          temp: 26.7, description: 'clear sky', cloudiness: 0.0, timestamp: '2020-11-27 15:00:00',
        },
        {
          temp: 26.78, description: 'clear sky', cloudiness: 0.0, timestamp: '2020-11-27 18:00:00',
        },
      ],
    },
  ],
};

export default CityWeatherStore;
