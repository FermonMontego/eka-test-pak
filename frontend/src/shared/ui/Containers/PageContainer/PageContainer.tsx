import React, { PropsWithChildren } from 'react'

type Props = {} & PropsWithChildren

const PageContainer = (props: Props) => {
    const { children } = props

    return (
        <div className="flex flex-col gap-[50] container mx-auto px-4 max-w-[1440px] py-[20]">
            {children}
        </div>
    )
}

export default PageContainer
