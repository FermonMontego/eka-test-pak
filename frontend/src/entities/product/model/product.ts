import { ProductImage } from './image'
import { ProductOffer } from './offer'

export type ProductProperties = Record<string, string>

export interface Product {
    uuid: string
    slug: string
    name: string
    article: string
    description: string
    category_uuid: string
    seo_description: string
    images: ProductImage[]
    offers: ProductOffer[]
    offers_min_price: string
    properties: ProductProperties
    'Мин. покупка, шт.': string
    Наличие: string
}
