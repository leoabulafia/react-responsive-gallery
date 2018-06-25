import { FETCH_IMAGES, DISPLAY_CURRENT_IMAGE } from 'actions/types';
import axios from 'axios';

//fetches images
export const fetchImages = page => dispatch => {
	axios.post('/api/images', page).then(res => {
		dispatch({
			type: FETCH_IMAGES,
			payload: res.data
		});
	});
};

export const displayCurrentImage = (
	imageAttributes,
	history,
	i
) => dispatch => {
	axios.post('/api/currentimage', imageAttributes).then(res => {
		dispatch({
			type: DISPLAY_CURRENT_IMAGE,
			payload: { imageDetails: res.data, index: i }
		});
		history.push(`/gallery/${i}`);
	});
};
