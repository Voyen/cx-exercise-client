import { createTypedHooks } from 'easy-peasy';
import CityWeatherStore from '../interfaces/store';

const typedHooks = createTypedHooks<CityWeatherStore>();

/* eslint-disable prefer-destructuring */
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
