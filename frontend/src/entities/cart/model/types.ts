import { Product } from '../../product/model/product'

export interface Cart {
    [article: string]: {
        quantity: number
        product: Product
    }
}
