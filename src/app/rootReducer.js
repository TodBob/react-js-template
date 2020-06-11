import { combineReducers } from 'redux';

/* CAROUSEL */
import carousel from './components/carousel/reducers/carousel';
import carouselError from './components/carousel/reducers/error';
import carouselLoading from './components/carousel/reducers/loading';

const carouselData = combineReducers({
  carousel,
  carouselError,
  carouselLoading,
});

const rootReducer = combineReducers({
  carouselData,
});

export default rootReducer;
