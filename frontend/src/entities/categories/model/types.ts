export type TextSection = {
    type: 'text_section'
    data: {
        heading: string
        content: string
    }
}

export type FeaturesList = {
    type: 'features_list'
    data: {
        heading: string
        items: { text: string }[]
    }
}

export type NotificationBlock = {
    type: 'notification_block'
    data: {
        type: 'info' | 'gray'
        message: string
    }
}

export type TextWithImage = {
    type: 'text_with_image'
    data: {
        heading: string
        text: string
        image: string
        image_position: 'left' | 'right'
    }
}

export type SimpleText = {
    type: 'simple_text'
    data: {
        text_content: string
    }
}

export type Advantage = {
    title: string
    description: string
}

export type AdvantagesGrid = {
    type: 'advantages_grid'
    data: {
        heading: string
        advantages: Advantage[]
    }
}

export type CtaBlock = {
    type: 'cta_block'
    data: {
        title: string
        description: string
        bg_color: string
        button_text: string | null
        button_link: string | null
    }
}

export type DescriptionBlock =
    | TextSection
    | FeaturesList
    | NotificationBlock
    | TextWithImage
    | SimpleText
    | AdvantagesGrid
    | CtaBlock

export interface Product {
    uuid: string
    name: string
    slug: string
    article: string
    description: string
    category_uuid: string
}

export interface Category {
    uuid: string
    name: string
    slug: string
    description: DescriptionBlock[]
    seo_title: string
    seo_description: string
    image_url: string
    min_price: string
    children: Category[] | null
    products: Product[] | null
}
