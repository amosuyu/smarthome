import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

import { categoryReducer } from "container/Client/ClientHome/SliderFeaturedBrand/module/reducer"

export const rootReducer = combineReducers({
    categoryReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))