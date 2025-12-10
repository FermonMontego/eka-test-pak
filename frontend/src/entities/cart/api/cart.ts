import { Product } from '../../product/model/product'
import { Cart } from '../model/types'

export const getCartFromStorage = (): Cart => {
    return JSON.parse(localStorage.getItem('cart') || JSON.stringify({}))
}

export const addProductToCartStorage = (product: Product) => {
    const actualCart = getCartFromStorage()

    const existProductInCart = actualCart[product.article]

    try {
        const newCart = existProductInCart
            ? {
                  ...actualCart,
                  [existProductInCart.product.article]: {
                      ...existProductInCart,
                      quantity: ++existProductInCart.quantity,
                  },
              }
            : {
                  ...actualCart,
                  [product.article]: {
                      product: product,
                      quantity: 1,
                  },
              }

        localStorage.setItem('cart', JSON.stringify(newCart))
    } catch {
        alert('Произошла ошибка при добавлении товара')
    }
}

export const removeProductFromCartStorage = (
    removedArticle: Product['article'],
    fullRemoveProduct?: boolean
) => {
    const actualCart = getCartFromStorage()

    let newCart: Cart = {}

    const newCardWithoutRemovedArticle = () => {
        for (const [article, data] of Object.entries(actualCart)) {
            if (article !== removedArticle) {
                newCart[article] = data
            }
        }
    }

    if (fullRemoveProduct) {
        newCardWithoutRemovedArticle()
    } else {
        if (
            actualCart[removedArticle] &&
            actualCart[removedArticle].quantity > 1
        )
            newCart = {
                ...actualCart,
                [removedArticle]: {
                    product: actualCart[removedArticle].product,
                    quantity: --actualCart[removedArticle].quantity,
                },
            }
        else {
            newCardWithoutRemovedArticle()
        }
    }

    localStorage.setItem('cart', JSON.stringify(newCart))
}

export const removeAllProductsFromCart = () => {
    localStorage.removeItem('cart')
}
