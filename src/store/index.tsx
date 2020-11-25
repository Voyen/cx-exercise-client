import { createStore } from 'easy-peasy';

import Store from '../interfaces/store';
import ItineraryStore from './itinerary';
import SavedItineraryStore from './saved-itinerary';

/**
 * Global store
 */
const store: Store = {
  itinerary: ItineraryStore,
  saved: SavedItineraryStore,
};

export default createStore<Store>(store);
