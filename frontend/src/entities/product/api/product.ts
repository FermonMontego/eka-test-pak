import { EKAPAK_API } from '@/src/app/env'
import { Product } from '../model/product'

export const getProducts = async (): Promise<{
    data: Product[]
    meta: any
}> => {
    return await fetch(EKAPAK_API + '/api/products', {
        method: 'GET',
    }).then((res) => {
        return res.json()
    })
}
