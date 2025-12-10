'use client'

import { Category } from '@/src/entities/categories/model/types'
import { useSidebarCategories } from '@/src/features/category-list/model/hook'
import CategoryItem from '@/src/features/category-list/ui/category-item/CategoryItem'
import { Text } from '@/src/shared/ui/Fonts/Text'
import DefaultLoader from '@/src/shared/ui/Loaders/DefaultLoader/ui/DefaultLoader'
import React, { useCallback, useMemo } from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    const { data, isLoading: isLoadingAllCategories } = useSidebarCategories()

    const renderSidebarItem = useCallback((item: Category) => {
        return <CategoryItem data={item} key={item.uuid} />
    }, [])

    return (
        <aside className="flex flex-col gap-5 p-[30] bg-white rounded-[20]">
            <Text isTitle size="sm" bold>
                Каталог товаров
            </Text>

            {isLoadingAllCategories && <DefaultLoader />}

            {!isLoadingAllCategories && (
                <nav className="flex flex-col gap-2.5">
                    {data?.map(renderSidebarItem)}
                </nav>
            )}
        </aside>
    )
}

export default Sidebar
