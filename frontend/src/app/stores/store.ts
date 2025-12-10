import { combineReducers } from 'redux'

import cartReducer from '@/src/entities/cart/model/cart.slice'
import { configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
    cart: cartReducer,
})

export const store = () =>
    configureStore({
        reducer,
    })

export type RootState = ReturnType<typeof reducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
