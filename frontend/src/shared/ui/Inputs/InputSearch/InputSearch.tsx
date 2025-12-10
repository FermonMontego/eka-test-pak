import React from 'react'
import SearchIcon from '../../Icons/SearchIcon'

type Props = {}

const InputSearch = (props: Props) => {
    return (
        <div className="flex flex-1 relative">
            <SearchIcon className="absolute top-1/2 left-[22] -translate-y-1/2" />
            <input
                type="text"
                placeholder="Поиск"
                className="px-[22] pl-11 py-3.5 border-[#D4D4D4] border-[1] rounded-[10] outline-0 flex-1"
            />
        </div>
    )
}

export default InputSearch
