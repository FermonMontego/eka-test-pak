import React, { useCallback } from 'react'
import Image from '@/src/shared/ui/Image/ui/Image'
import { Product } from '@/src/entities/product/model/product'
import { Text } from '@/src/shared/ui/Fonts/Text'
import { Price } from '@/src/shared/ui/Price/ui'
import { addToCart } from '@/src/entities/cart/model/cart.slice'
import { useDispatch } from 'react-redux'

type Props = {
    data: Product
}

const ProductCard = (props: Props) => {
    const { data } = props

    const dispatch = useDispatch()

    const handleAddToCard = useCallback(
        (product: Product) => () => {
            dispatch(addToCart(product))
        },
        []
    )

    return (
        <a
            className="cursor-pointer hover:bg-[#F5F7FB] rounded-[10]"
            onClick={handleAddToCard(data)}
        >
            <article className="flex flex-col gap-5 p-5">
                <Image
                    source={data.images?.[0].card_url}
                    className="rounded-[6]"
                />

                <div className="flex flex-col gap-2.5">
                    <Text
                        className="text-center text-ellipsis md:text-clip"
                        size="md"
                    >
                        {data.name}
                    </Text>
                    <Price className="text-center">
                        {data.offers_min_price}
                    </Price>
                </div>
            </article>
        </a>
    )
}

export default ProductCard
