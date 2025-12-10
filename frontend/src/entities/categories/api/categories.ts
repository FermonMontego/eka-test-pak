import { EKAPAK_API } from '@/src/app/env'
import { Category } from '../model/types'

export const getCategories = async (): Promise<{
    data: Category[]
    meta: any
}> => {
    return await fetch(EKAPAK_API + '/api/categories', {
        method: 'GET',
    }).then((res) => {
        return res.json()
    })
}

export const getCategoriesById = async (
    uuid: string
): Promise<{
    data: Category
    meta: any
}> => {
    return await fetch(EKAPAK_API + '/api/categories/' + uuid, {
        method: 'GET',
    }).then((res) => {
        return res.json()
    })
}
