import React, { PropsWithChildren } from 'react'

type Props = { href: string; className?: string } & PropsWithChildren

const DefaultLink = (props: Props) => {
    const { href, children, className } = props

    return (
        <a href={href} className={className}>
            {children}
        </a>
    )
}

export default DefaultLink
