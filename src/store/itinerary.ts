import { action } from 'easy-peasy';
import ItineraryModel from '../interfaces/itinerary-model';

const ItineraryStore: ItineraryModel = {
  entries: [],
  addEntry: action((state, entry) => {
    state.entries.push(entry);
  }),
  removeEntry: action((state, entryId) => {
    const index = state.entries.findIndex((entry) => entry.id === entryId);
    state.entries.splice(index, 1);
  }),
};

export default ItineraryStore;
