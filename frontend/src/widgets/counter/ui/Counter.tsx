import React from 'react'

type Props = {
    value: number
    prefixValue?: string
    onIncrement?: () => void
    onDecriment?: () => void
}

const Counter = (props: Props) => {
    const { value, prefixValue, onDecriment, onIncrement } = props
    return (
        <div className="flex flex-row justify-between items-center gap-[22px] rounded-[10px] border border-[#DFDFDF] p-2 w-max max-sm:w-full">
            <div
                onClick={onDecriment}
                className="flex items-center justify-center bg-[#F5F7FB] rounded-[6] p-2 cursor-pointer w-8 h-8"
            >
                -
            </div>
            <div>
                {value} {prefixValue}
            </div>
            <div
                onClick={onIncrement}
                className="flex items-center justify-center bg-[#F5F7FB] rounded-[6] p-2 cursor-pointer w-8 h-8"
            >
                +
            </div>
        </div>
    )
}

export default Counter
