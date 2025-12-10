import { createSlice } from '@reduxjs/toolkit'
import {
    addProductToCartStorage,
    getCartFromStorage,
    removeAllProductsFromCart,
    removeProductFromCartStorage,
} from '../api/cart'
import { Cart } from './types'
import { useSelector } from 'react-redux'
import { RootState } from '@/src/app/stores/store'
import { Product } from '../../product/model/product'

type CartSlice = {
    cart: Cart
}

const initialState: CartSlice = {
    cart: {},
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        loadCart(state) {
            state.cart = getCartFromStorage()

            console.log(state.cart, 'cart')
        },

        addToCart(state, action: { payload: Product; type: string }) {
            const { payload, type } = action

            addProductToCartStorage(payload)

            state.cart = getCartFromStorage()
        },

        removeProductFromCart(
            state,
            action: {
                payload: {
                    data: Product['article']
                    fullRemoveProduct?: boolean
                }
                type: string
            }
        ) {
            const {
                payload: { data, fullRemoveProduct },
                type,
            } = action

            removeProductFromCartStorage(data, fullRemoveProduct)

            state.cart = getCartFromStorage()
        },

        removeAllProducts(state) {
            removeAllProductsFromCart()

            state.cart = getCartFromStorage()
        },
    },
})

export const { loadCart, addToCart, removeProductFromCart, removeAllProducts } =
    cartSlice.actions

export const useCartSelector = () =>
    useSelector((state: RootState) => state.cart.cart)

export default cartSlice.reducer
