import ItineraryModel from './itinerary-model';
import SavedItineraryModel from './saved-itinerary-model';

export default interface Store {
  itinerary: ItineraryModel;
  saved: SavedItineraryModel;
}
