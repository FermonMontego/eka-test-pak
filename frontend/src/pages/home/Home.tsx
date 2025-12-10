'use client'

import React from 'react'

import { PageContainer } from '@/src/shared/ui/Containers/PageContainer'
import Header from '@/src/widgets/header/ui/Header'
import Banner from '@/src/widgets/banner/ui/Banner'
import Sidebar from '@/src/widgets/sidebar/ui/Sidebar'
import ProductList from '@/src/widgets/product-list/ui/ProductList'
import { useProductList } from '@/src/features/product-list/model/use-product-list'
import { Layout } from '@/src/widgets/layout/ui'

type Props = {}

const Home = (props: Props) => {
    const { data, isLoading } = useProductList()

    return (
        <Layout>
            <div className="grid grid-cols-[minmax(0px,353px)_1fr] max-md:grid-cols-1 gap-2.5">
                <div className="max-md:hidden">
                    <Sidebar />
                </div>

                <ProductList data={data} isLoading={isLoading} />
            </div>
        </Layout>
    )
}

export default Home
