import { combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import CartSlice from './redux/CartSlice';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import ModalSlice from './redux/ModalSlice';

const rootReducer = combineReducers({
    cart: CartSlice,
    showModal: ModalSlice,
});

const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
