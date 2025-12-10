import {
    addToCart,
    loadCart,
    removeProductFromCart,
    removeAllProducts,
    useCartSelector,
} from '@/src/entities/cart/model/cart.slice'

export const useProductCart = () => {
    const cart = useCartSelector()

    return {
        addToCart,
        loadCart,
        removeProductFromCart,
        removeAllProducts,
        cart,
    }
}
