import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

import { productReducer } from "container/Client/ClientHome/SliderFeaturedBrand/module/reducer"
import { categoryReducer } from "components/module/reducer"
import { productToBuyReducer } from "container/Client/saveProductToBuyReducer/reducer"
import { LogintReducer } from "container/auth/module/reducer";


export const rootReducer = combineReducers({
    productReducer,
    categoryReducer,
    productToBuyReducer,
    LogintReducer
    


})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))