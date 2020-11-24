import { action } from 'easy-peasy';
import CityWeatherEntry from '../interfaces/city-weather-entry';
import ItineraryModel from '../interfaces/itinerary-model';

const ItineraryStore: ItineraryModel = {
  entries: [
    // static dummy entry for now...
    {
      id: 2078025,
      name: 'Adelaide',
      country: 'AU',
      details: [
        {
          temp: 17.2,
          description: 'broken clouds',
          cloudiness: 65.0,
          timestamp: '2020-11-24 12:00:00',
          epoch: 1606219200,
        },
        {
          temp: 16.48,
          description: 'clear sky',
          cloudiness: 6.0,
          timestamp: '2020-11-24 15:00:00',
          epoch: 1606230000,
        },
        {
          temp: 16.62,
          description: 'clear sky',
          cloudiness: 3.0,
          timestamp: '2020-11-24 18:00:00',
          epoch: 1606240800,
        },
        {
          temp: 20.24,
          description: 'clear sky',
          cloudiness: 0.0,
          timestamp: '2020-11-25 12:00:00',
          epoch: 1606305600,
        },
        {
          temp: 19.24,
          description: 'clear sky',
          cloudiness: 0.0,
          timestamp: '2020-11-25 15:00:00',
          epoch: 1606316400,
        },
        {
          temp: 18.24,
          description: 'clear sky',
          cloudiness: 0.0,
          timestamp: '2020-11-25 18:00:00',
          epoch: 1606327200,
        },
        {
          temp: 21.38,
          description: 'few clouds',
          cloudiness: 15.0,
          timestamp: '2020-11-26 12:00:00',
          epoch: 1606392000,
        },
        {
          temp: 21.36,
          description: 'few clouds',
          cloudiness: 16.0,
          timestamp: '2020-11-26 15:00:00',
          epoch: 1606402800,
        },
        {
          temp: 22.72,
          description: 'broken clouds',
          cloudiness: 57.0,
          timestamp: '2020-11-26 18:00:00',
          epoch: 1606413600,
        },
        {
          temp: 29.14,
          description: 'clear sky',
          cloudiness: 0.0,
          timestamp: '2020-11-27 12:00:00',
          epoch: 1606478400,
        },
        {
          temp: 27.79,
          description: 'clear sky',
          cloudiness: 0.0,
          timestamp: '2020-11-27 15:00:00',
          epoch: 1606489200,
        },
        {
          temp: 28.81,
          description: 'clear sky',
          cloudiness: 0.0,
          timestamp: '2020-11-27 18:00:00',
          epoch: 1606500000,
        },
        {
          temp: 16.53,
          description: 'scattered clouds',
          cloudiness: 29.0,
          timestamp: '2020-11-28 12:00:00',
          epoch: 1606564800,
        },
        {
          temp: 15.25,
          description: 'clear sky',
          cloudiness: 0.0,
          timestamp: '2020-11-28 15:00:00',
          epoch: 1606575600,
        },
        {
          temp: 14.35,
          description: 'clear sky',
          cloudiness: 0.0,
          timestamp: '2020-11-28 18:00:00',
          epoch: 1606586400,
        },
      ],
    },
  ],
  addEntry: action((state, entry) => {
    state.entries.push(entry);
  }),
  removeEntry: action((state, entryId) => {
    const index = state.entries.findIndex((entry) => entry.id === entryId);
    state.entries.splice(index, 1);
  }),
};

export default ItineraryStore;
