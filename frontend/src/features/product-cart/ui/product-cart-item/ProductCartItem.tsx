import React, { useCallback, useEffect, useMemo } from 'react'
import { Product } from '@/src/entities/product/model/product'
import Image from '@/src/shared/ui/Image/ui/Image'
import { Text } from '@/src/shared/ui/Fonts/Text'
import Counter from '@/src/widgets/counter/ui/Counter'
import { FavoriteIcon } from '@/src/shared/ui/Icons'
import Trash from '@/src/shared/ui/Icons/Trash'
import { useProductCart } from '../../model/use-product-cart'
import { useDispatch } from 'react-redux'

type Props = {
    data: Product
}

const ProductCartItem = (props: Props) => {
    const { data } = props

    const dispatch = useDispatch()

    const { addToCart, cart, removeProductFromCart } = useProductCart()

    const countOfProduct = useMemo(() => {
        return cart[data.article]?.quantity
    }, [cart])

    const handleIncrementCountProducts = useCallback(
        (data: Product) => () => {
            dispatch(addToCart(data))
        },
        []
    )

    const handleDecrimentCountProducts = useCallback(
        (data: Product) => () => {
            dispatch(removeProductFromCart({ data: data.article }))
        },
        []
    )

    const handleRemoveProductFromCart = useCallback(
        (article: Product['article']) => () => {
            dispatch(
                removeProductFromCart({
                    data: article,
                    fullRemoveProduct: true,
                })
            )
        },
        []
    )

    return (
        <div className="flex max-md:flex-col justify-between bg-white border-dashed border border-[#E9E9E9] gap-5 p-7 items-center">
            <div className="grid grid-cols-[minmax(0px,87px)_minmax(0px,220px)] gap-5 items-center">
                <Image source={data.images[0].card_url} width={87} />

                <div className="flex flex-col gap-0.5">
                    <Text size="sm">Арт. {data.article}</Text>
                    <Text size="md">{data.name}</Text>
                </div>
            </div>

            <Counter
                value={countOfProduct}
                prefixValue="шт"
                onIncrement={handleIncrementCountProducts(data)}
                onDecriment={handleDecrimentCountProducts(data)}
            />

            <div>
                <Text size="lg">
                    {(
                        parseFloat(data.offers_min_price) * countOfProduct
                    ).toFixed(2)}{' '}
                    ₽
                </Text>
                <Text size="md">
                    {data.offers_min_price} * {countOfProduct}
                </Text>
            </div>

            <div className="flex flex-row gap-2.5">
                <button className="cursor-pointer p-1.5 rounded-[6] bg-[#F5F7FB]">
                    <FavoriteIcon />
                </button>
                <button
                    className="cursor-pointer p-1.5 rounded-[6] bg-[#F5F7FB]"
                    onClick={handleRemoveProductFromCart(data.article)}
                >
                    <Trash />
                </button>
            </div>
        </div>
    )
}

export default ProductCartItem
