import { FETCH_IMAGES } from 'actions/types';

/*
	imagesCollection is an array that contains the objects with image data.
	perPage and page are used to make requests to flickr api.
	The init state is set to 20 but later we'll request 10 for infinite scrolling
*/
const initState = {
	imagesCollection: [],
	perPage: 20,
	page: 1
};

export default (state = initState, action) => {
	switch (action.type) {
		case FETCH_IMAGES:
			return {
				imagesCollection: [...state.imagesCollection, ...action.payload],
				page: state.page + 1,
				perPage: state.perPage
			};
		default:
			return state;
	}
};
