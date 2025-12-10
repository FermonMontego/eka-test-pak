import React from 'react'
import LinkIcon from '@/src/shared/ui/LinkIcon/LinkIcon'
import {
    BasketIcon,
    FavoriteIcon,
    FilterIcon,
    GeoIcon,
    LogoCompany,
    MailIcon,
    ProfileIcon,
    TelegramIcon,
    WhatsAppIcon,
} from '@/src/shared/ui/Icons'
import PhoneLink from '@/src/shared/ui/Links/PhoneLink/PhoneLink'
import { Button } from '@/src/shared/ui/Buttons/Button'
import InputSearch from '@/src/shared/ui/Inputs/InputSearch/InputSearch'
import BurgerIcon from '@/src/shared/ui/Icons/BurgerIcon'
import CallIcon from '@/src/shared/ui/Icons/CallIcon'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="bg-white rounded-[20] py-[22] px-[30]">
            <div className="flex flex-col gap-[22px]">
                <div className="flex max-sm:hidden">
                    <LinkIcon Icon={GeoIcon}>
                        г. Екатеринбург, ул. Старых Большевиков, 2А/2
                    </LinkIcon>

                    <div className="ml-auto flex gap-[30]">
                        <div className="flex gap-4">
                            <LinkIcon Icon={MailIcon}>info@ekapak.ru</LinkIcon>
                            <LinkIcon Icon={WhatsAppIcon} />
                            <LinkIcon Icon={TelegramIcon} />
                        </div>

                        <div className="flex gap-5 max-lg:hidden">
                            <PhoneLink phone="+79068139777">
                                +7 (906) 813-97-77
                            </PhoneLink>
                            <PhoneLink phone="+79068136333">
                                +7 (906) 813-63-33
                            </PhoneLink>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[30] max-sm:flex-col max-sm:gap-2.5">
                    <div className="flex justify-between">
                        <LinkIcon Icon={LogoCompany} href="/" />

                        <div className="flex gap-2.5 sm:hidden">
                            <LinkIcon
                                className={`rounded-[4] bg-[#F5F7FB] p-3`}
                                Icon={MailIcon}
                            />
                            <LinkIcon
                                className={`rounded-[4] bg-[#F5F7FB] p-3`}
                                Icon={CallIcon}
                            />
                            <LinkIcon
                                className={`rounded-[4] bg-[#F5F7FB] p-3`}
                                Icon={BurgerIcon}
                            />
                        </div>
                    </div>

                    <div className="flex flex-1 gap-2.5">
                        <div className="max-xl:hidden">
                            <Button variant="secondary" Icon={FilterIcon}>
                                Каталог
                            </Button>
                        </div>

                        <InputSearch />
                    </div>

                    <div className="flex gap-[30] max-lg:hidden">
                        <LinkIcon vertical Icon={ProfileIcon}>
                            Профиль
                        </LinkIcon>
                        <LinkIcon vertical Icon={FavoriteIcon}>
                            Избранное
                        </LinkIcon>
                        <LinkIcon
                            LinkComponent={Link}
                            vertical
                            Icon={BasketIcon}
                            href="/cart"
                        >
                            Корзина
                        </LinkIcon>
                    </div>

                    <div className="max-md:hidden">
                        <Button>Заказать образец</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
