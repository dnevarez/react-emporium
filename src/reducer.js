// This file uses redux's combineReducers to combine the reducers.
import { combineReducers } from 'redux';

import cart from './ducks/cartDuck';
import user from './ducks/userDuck';

export default combineReducers({
  cart,
  user
})
