'use client'

import {
    getCategories,
    getCategoriesById as getCategoriesByUuid,
} from '@/src/entities/categories/api/categories'
import { Category } from '@/src/entities/categories/model/types'
import { useQuery } from '@tanstack/react-query'

export const useSidebarCategories = () => {
    return useQuery<Category[], Error>({
        queryKey: ['categories', 'sidebar'],
        queryFn: async () => {
            return (await getCategories()).data
        },
    })
}

export const useSidebarCategoriesById = () => {
    return {
        getCategoriesByUuid,
    }
}
