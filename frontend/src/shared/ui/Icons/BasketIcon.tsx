import React from 'react'
import { SVGType } from './types'

type Props = {} & SVGType

const BasketIcon = (props: Props) => {
    const { fill = 'none', stroke = '#2C2C2C', style } = props

    return (
        <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            style={style}
        >
            <path
                d="M0.5 0.5L3.02874 8.68123C3.44866 10.0398 3.65862 10.7191 4.188 11.1095C4.71738 11.5 5.42837 11.5 6.85035 11.5H11.3083C12.6581 11.5 13.3331 11.5 13.8488 11.1401C14.3645 10.7801 14.5973 10.1466 15.0629 8.87962L15.5233 7.62667C16.422 5.18075 16.8714 3.95779 16.2744 3.10242C15.6774 2.24706 14.3745 2.24706 11.7687 2.24706H1.76667"
                stroke={stroke}
                strokeLinecap="round"
            />
            <circle cx="5.5" cy="14.5" r="1.5" stroke={stroke} />
            <circle cx="12.5" cy="14.5" r="1.5" stroke={stroke} />
        </svg>
    )
}

export default BasketIcon
