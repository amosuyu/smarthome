import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

import { productReducer } from "container/Client/ClientHome/SliderFeaturedBrand/module/reducer"
import { categoryReducer } from "components/module/reducer"
import { productToBuyReducer } from "container/Client/saveProductToBuyReducer/reducer"

export const rootReducer = combineReducers({
    productReducer,
    categoryReducer,
    productToBuyReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))