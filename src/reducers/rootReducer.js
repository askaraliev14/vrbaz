import { cartInitialState, cartReducer } from './cartReducer';
import combineReducers from './combineReducers';
import { layoutInitialState, layoutReducer } from './layoutReducer';
export const initialState = {
  layout: layoutInitialState,
  cart: cartInitialState
};
export const rootReducer = combineReducers({
  layout: layoutReducer,
  cart: cartReducer
});