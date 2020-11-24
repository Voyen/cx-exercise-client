import { createStore } from 'easy-peasy';

import Store from '../interfaces/store';
import ItineraryStore from './itinerary';

/**
 * Global store
 */
const store: Store = {
  itinerary: ItineraryStore,
};

export default createStore<Store>(store);
