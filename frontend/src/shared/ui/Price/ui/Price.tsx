import React, { PropsWithChildren } from 'react'
import { Text } from '../../Fonts/Text'
import classNames from 'classnames'

type Props = {
    className?: string
} & PropsWithChildren

const Price = (props: Props) => {
    const { children, className } = props

    return (
        <Text
            bold
            size="sm"
            className={classNames('text-[#00B0FF]', className)}
        >
            {children}
        </Text>
    )
}

export default Price
