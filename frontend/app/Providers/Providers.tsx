'use client'

import React, { PropsWithChildren } from 'react'

import { AntdRegistry } from '@ant-design/nextjs-registry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '@/src/app/stores'

type Props = {} & PropsWithChildren

const queryClient = new QueryClient()

const Providers = (props: Props) => {
    const { children } = props

    return (
        <AntdRegistry>
            <QueryClientProvider client={queryClient}>
                <Provider store={store()}>{children}</Provider>
            </QueryClientProvider>
        </AntdRegistry>
    )
}

export default Providers
