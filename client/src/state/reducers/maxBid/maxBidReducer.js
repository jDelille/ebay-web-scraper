const maxBidReducer = (state = 0, action) => {
	switch (action.type) {
		case 'maxBid':
			return (state = action.payload);
		default:
			return state;
	}
};

export default maxBidReducer;
