// update favorites
export const updateFavorites = (amount) => {
	return (dispatch) => {
		dispatch({
			type: 'fav',
			payload: amount,
		});
	};
};
