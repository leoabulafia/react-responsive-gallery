import { DISPLAY_CURRENT_IMAGE } from 'actions/types';

let initState = { imageDetails: null, index: null };

export default (state = initState, action) => {
	switch (action.type) {
		case DISPLAY_CURRENT_IMAGE:
			return action.payload;
		default:
			return state;
	}
};
