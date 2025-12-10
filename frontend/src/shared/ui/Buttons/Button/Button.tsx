import React, { ElementType, PropsWithChildren, useCallback } from 'react'
import { Text } from '../../Fonts/Text'
import classNames from 'classnames'

import style from './style.module.css'
import { colors } from '@/src/shared/constants/colors'
import { SVGType } from '../../Icons/types'

type ButtonVariant = 'primary' | 'secondary'

type Props = {
    Icon?: ElementType<SVGType>
    onClick?: () => void
    variant?: ButtonVariant
    disabled?: boolean
} & PropsWithChildren

const Button = (props: Props) => {
    const { children, Icon, onClick, variant = 'primary', disabled } = props

    return (
        <button
            onClick={onClick}
            className={classNames(style.button, getStyleByVariant(variant))}
            disabled={disabled}
        >
            {Icon && <Icon fill={getColor(variant)} />}
            <Text
                bold
                extraStyle={{
                    color: getColor(variant),
                }}
                size="md"
                className="text-center w-full"
            >
                {children}
            </Text>
        </button>
    )
}

const getColor = (variant: ButtonVariant) => {
    if ((['primary'] as ButtonVariant[]).includes(variant)) return colors.white

    return colors.black
}

const getStyleByVariant = (variant: ButtonVariant) => {
    switch (variant) {
        case 'primary': {
            return style.primary
        }
        case 'secondary': {
            return style.secondary
        }
        default: {
            return style.primary
        }
    }
}

export default Button
