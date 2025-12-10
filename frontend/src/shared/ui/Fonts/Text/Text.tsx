import React, { CSSProperties, PropsWithChildren } from 'react'

import baseStyle from './style.module.css'
import classNames from 'classnames'

type Props = {
    bold?: boolean
    isTitle?: boolean
    extraStyle?: CSSProperties
    size?: 'sm' | 'md' | 'lg'
    className?: string
} & PropsWithChildren

const Text = (props: Props) => {
    const {
        children,
        extraStyle,
        bold,
        isTitle,
        size = 'lg',
        className,
    } = props

    return (
        <p
            style={extraStyle}
            className={classNames(
                baseStyle.text,
                bold && baseStyle.bold,
                (isTitle && getTitleSize(size)) || getTextSize(size),
                className
            )}
        >
            {children}
        </p>
    )
}

const getTitleSize = (size: Props['size']) => {
    switch (size) {
        case 'sm': {
            return baseStyle.titleSm
        }
        case 'md': {
            return baseStyle.titleMd
        }
        case 'lg': {
            return baseStyle.titleLg
        }
    }
}

const getTextSize = (size: Props['size']) => {
    switch (size) {
        case 'sm': {
            return baseStyle.textSm
        }
        case 'md': {
            return baseStyle.textMd
        }
        case 'lg': {
            return baseStyle.textLg
        }
    }
}

export default Text
