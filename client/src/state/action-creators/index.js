// update favorites
export const updateFavorites = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'fav',
			payload: amount,
		});
	};
};

// set max bid
export const setMaxBid = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'maxBid',
			payload: amount,
		});
	};
};
