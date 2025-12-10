'use client'

import { Category } from '@/src/entities/categories/model/types'
import { ArrowIcon } from '@/src/shared/ui/Icons'
import { useState } from 'react'

type Props = {
    data: Category
}

const CategoryItem = (props: Props) => {
    const { data } = props

    const [hover, setHover] = useState(false)

    return (
        <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <a className="flex flex-row justify-between p-1 border-b-[1] border-[#F5F7FB] cursor-pointer items-center gap-2">
                <span>{data.name}</span>
                {data.children?.length && <ArrowIcon />}
            </a>

            {data.children?.length && hover && (
                <div className="bg-white p-4 border-[1] border-[#D4D4D4] rounded-[10] absolute left-full top-0">
                    {data.children.map((item) => (
                        <p
                            className="text-nowrap px-6 py-1.5 rounded-[10] hover:bg-[#F5F7FB] cursor-pointer"
                            key={item.uuid}
                        >
                            {item.name}
                        </p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CategoryItem
