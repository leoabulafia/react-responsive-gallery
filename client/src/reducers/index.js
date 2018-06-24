import { combineReducers } from 'redux';
import imagesReducer from 'reducers/imagesReducer';
import currentImageReducer from 'reducers/currentImageReducer';

export default combineReducers({
	images: imagesReducer,
	currentImage: currentImageReducer
});
