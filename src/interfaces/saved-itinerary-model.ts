import { Action } from 'easy-peasy';
import SavedItineraryEntry from './saved-itinerary-entry';

export default interface SavedItineraryModel {
  entries: SavedItineraryEntry[];
  addEntry: Action<SavedItineraryModel, SavedItineraryEntry>;
  removeEntry: Action<SavedItineraryModel, number>;
}
