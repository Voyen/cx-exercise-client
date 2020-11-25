import { action } from 'easy-peasy';
import SavedItineraryModel from '../interfaces/saved-itinerary-model';

const SavedItineraryStore: SavedItineraryModel = {
  entries: [],
  addEntry: action((state, entry) => {
    state.entries.push(entry);
  }),
  removeEntry: action((state, entryId) => {
    const url = `http://localhost:3000/saved/${entryId}`;
    const opts = { method: 'DELETE' };
    fetch(url, opts);

    const index = state.entries.findIndex((entry) => entry.id === entryId);
    state.entries.splice(index, 1);
  }),
};

export default SavedItineraryStore;
