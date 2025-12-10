import { getProducts } from '@/src/entities/product/api/product'
import { Product } from '@/src/entities/product/model/product'
import { useQuery } from '@tanstack/react-query'

export const useProductList = () =>
    useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: async () => (await getProducts()).data,
    })
