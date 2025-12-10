import { PageContainer } from '@/src/shared/ui/Containers/PageContainer'
import Header from '../../header/ui/Header'
import Banner from '../../banner/ui/Banner'
import Sidebar from '../../sidebar/ui/Sidebar'
import { PropsWithChildren } from 'react'

type Props = {} & PropsWithChildren

const Layout = (props: Props) => {
    const { children } = props
    return (
        <PageContainer>
            <Header />
            <div className="flex flex-col gap-5">
                <Banner />

                {children}
            </div>
        </PageContainer>
    )
}

export default Layout
