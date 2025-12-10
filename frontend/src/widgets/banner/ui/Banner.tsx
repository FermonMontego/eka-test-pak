import { Text } from '@/src/shared/ui/Fonts/Text'
import BigCheckboxIcon from '@/src/shared/ui/Icons/BigCheckboxIcon'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
    return (
        <div className="flex justify-between p-10 max-md:p-5 rounded-[20] bg-white gap-7">
            <div className="flex flex-col gap-5">
                <Text isTitle bold size="sm">
                    Производство гибкой пластиковой упаковки{' '}
                </Text>
                <Text>По индивидуальным размерам и в минимальные сроки</Text>
            </div>

            <BigCheckboxIcon />
        </div>
    )
}

export default Banner
