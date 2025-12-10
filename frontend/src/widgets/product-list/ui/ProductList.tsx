import React from 'react'

import { ProductCard } from '../../product-card/ui'
import DefaultLoader from '@/src/shared/ui/Loaders/DefaultLoader/ui/DefaultLoader'
import { Product } from '@/src/entities/product/model/product'

type Props = {
    data?: Product[]
    isLoading: boolean
}

const ProductList = (props: Props) => {
    const { data, isLoading } = props

    console.log(JSON.stringify(data))

    if (isLoading) return <DefaultLoader />

    if (!data) return <>{'Ничего нет :('}</>

    return (
        <div className="bg-white rounded-[20] p-[30] max-md:p-2 grid max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4 xl:grid-cols-4 gap-2.5">
            {data.map(renderProductCard)}
        </div>
    )
}

const renderProductCard = (product: Product) => {
    return <ProductCard data={product} key={product.uuid} />
}

export default ProductList
