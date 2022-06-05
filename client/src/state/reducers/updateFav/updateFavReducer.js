const updateFavReducer = (state = 0, action) => {
	switch (action.type) {
		case 'fav':
			return (state = action.payload);
		default:
			return state;
	}
};

export default updateFavReducer;
