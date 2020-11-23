import { createStore } from 'easy-peasy';

import Store from '../interfaces/store';
import CityWeatherStore from './city-weather';

/**
 * Global store
 */
const store: Store = {
  weather: CityWeatherStore,
};

export default createStore<Store>(store);
