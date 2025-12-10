import { Text } from '@/src/shared/ui/Fonts/Text'
import React, { useCallback, useMemo, useState } from 'react'
import { useProductCart } from '../../model/use-product-cart'
import { Button } from '@/src/shared/ui/Buttons/Button'
import { usePayment } from '@/src/features/payment/api/payment'
import { useDispatch } from 'react-redux'
import { notification } from 'antd'
import DefaultLoader from '@/src/shared/ui/Loaders/DefaultLoader/ui/DefaultLoader'

type Props = {}

const Summary = (props: Props) => {
    const { cart, removeAllProducts } = useProductCart()
    const dispatch = useDispatch()
    const { createPayment, processStatus, paymentProcess } = usePayment()
    const [isLoading, setIsLoading] = useState(false)

    const countOfProduct = useMemo(() => {
        return Object.keys(cart).length
    }, [cart])

    const priceForAllProducts = useMemo(() => {
        return Object.entries(cart).reduce((acc, item) => {
            const [article, data] = item

            return (acc +=
                parseInt(data.product.offers_min_price) * data.quantity)
        }, 0)
    }, [cart])

    const handlePayment = useCallback(() => {
        setIsLoading(true)

        createPayment({ amount: priceForAllProducts, currency: 'RUB' })
            .then((res) => {
                const timer = setTimeout(() => {
                    clearTimeout(timer)
                    setIsLoading(false)

                    paymentProcess(res.payment_uuid)
                        .then((res) => {
                            if (res?.status === 'success') {
                                dispatch(removeAllProducts())
                                alert('Ваш заказ успешно оплачен')
                            } else if (res?.status === 'failed') {
                                alert('При оплате произошла ошибка')
                            }
                        })
                        .catch((error) => {
                            alert('Произошла ошибка ' + error.message)
                        })
                }, 2500)
            })
            .catch((error: Error) => {
                alert('Что-то пошло не так ' + error.message)
            })
    }, [priceForAllProducts, isLoading])

    return (
        <div className="flex flex-col bg-white rounded-[20] p-[30] h-max sticky top-2.5">
            <Text isTitle bold size="sm">
                Ваш заказ
            </Text>

            <div className="my-4 border-[1] border-dashed border-[#D4D4D4]" />

            <Text>Товаров в корзине {countOfProduct}</Text>

            <div className="flex justify-between items-center">
                <Text isTitle size="sm" bold>
                    Всего:
                </Text>

                <Text isTitle size="md">
                    {priceForAllProducts} ₽
                </Text>
            </div>

            <div className="my-4 border-[1] border-dashed border-[#D4D4D4]" />

            {isLoading ? (
                <DefaultLoader />
            ) : (
                <Button onClick={handlePayment} disabled={isLoading}>
                    Оплатить
                </Button>
            )}
        </div>
    )
}

export default Summary
