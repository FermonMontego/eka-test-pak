import React, { PropsWithChildren } from 'react'
import { Text } from '../../Fonts/Text'

type Props = {
    phone?: string
} & PropsWithChildren

const PhoneLink = (props: Props) => {
    const { phone, children } = props

    return (
        <a href={`tel: ${phone ?? children}`}>
            <Text bold>{children}</Text>
        </a>
    )
}

export default PhoneLink
