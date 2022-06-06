import { combineReducers } from 'redux';
import maxBidReducer from './maxBid/maxBidReducer';
import updateFavReducer from './updateFav/updateFavReducer';

const reducers = combineReducers({
	favs: updateFavReducer,
	maxBid: maxBidReducer,
});

export default reducers;
