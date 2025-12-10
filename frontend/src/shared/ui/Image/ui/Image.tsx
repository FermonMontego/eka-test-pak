import React from 'react'

type Props = {
    source: string
    className?: string
    width?: number
    height?: number
}

const Image = (props: Props) => {
    const { source, className, width, height } = props

    return <img src={source} className={className} style={{ width, height }} />
}

export default Image
