import React, { ElementType, FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import { DefaultLink } from '../Links/DefaultLink'

type Props = {
    Icon: ElementType
    href?: string
    vertical?: boolean
    className?: string
    LinkComponent?: ElementType
} & PropsWithChildren

const LinkIcon = (props: Props) => {
    const { children, Icon, href, vertical, className, LinkComponent } = props

    const Component = LinkComponent ?? DefaultLink

    return (
        <>
            <Component
                href={href}
                className={classNames(
                    'flex items-center cursor-pointer',
                    vertical && ['flex-col', 'justify-end', 'gap-1.5'],
                    !vertical && 'gap-2.5',
                    className
                )}
            >
                <Icon />
                {children}
            </Component>
        </>
    )
}

export default LinkIcon
