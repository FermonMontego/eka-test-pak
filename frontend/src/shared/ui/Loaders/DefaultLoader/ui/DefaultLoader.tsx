import React from 'react'

type Props = {}

const DefaultLoader = (props: Props) => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#00B0FF] border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}

export default DefaultLoader
