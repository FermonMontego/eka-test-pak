'use client'

import React, { useCallback, useEffect, useMemo } from 'react'

import { useProductCart } from '@/src/features/product-cart/model/use-product-cart'
import ProductCartItem from '@/src/features/product-cart/ui/product-cart-item/ProductCartItem'
import Summary from '@/src/features/product-cart/ui/summary/Summary'
import { Text } from '@/src/shared/ui/Fonts/Text'

import { Layout } from '@/src/widgets/layout/ui'
import { useDispatch } from 'react-redux'

type Props = {}

const Cart = (props: Props) => {
    const { cart, loadCart } = useProductCart()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCart())
    }, [])

    const cartData = useMemo(() => {
        return Object.entries(cart)
    }, [cart])

    const cartIsEmpty = useMemo(() => {
        return !Object.keys(cart).length
    }, [cart])

    const renderCartList = useCallback(() => {
        return cartData.map(([article, data]) => {
            const { quantity, product } = data

            return <ProductCartItem data={product} key={product.uuid} />
        })
    }, [cartData])

    return (
        <Layout>
            {cartIsEmpty && (
                <Text isTitle className="text-center">
                    Корзина пуста
                </Text>
            )}

            {!cartIsEmpty && (
                <div className="grid grid-cols-[1fr_minmax(0px,352px)] gap-3 max-xl:grid-cols-1">
                    <div>{renderCartList()}</div>

                    <Summary />
                </div>
            )}
        </Layout>
    )
}

export default Cart
