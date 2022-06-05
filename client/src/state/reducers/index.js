import { combineReducers } from 'redux';
import updateFavReducer from './updateFav/updateFavReducer';

const reducers = combineReducers({
	favs: updateFavReducer,
});

export default reducers;
