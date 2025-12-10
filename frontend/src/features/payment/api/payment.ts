import { API_URL } from '@/src/app/env'
import { Payment } from '../model/types'

const createPayment = async (paymentData: Payment) => {
    return (
        await fetch(API_URL + '/api/payments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        })
    ).json()
}

const paymentProcess = async (payment_id: string) => {
    return (
        await fetch(API_URL + '/api/payments/' + payment_id + '/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                success: Math.random() > 0.5 ? true : false,
            }),
        })
    ).json()
}

const processStatus = async (payment_id: string) => {
    return (
        await fetch(API_URL + '/api/payments/' + payment_id, {
            method: 'GET',
        })
    ).json()
}

export const usePayment = () => {
    return {
        createPayment,
        paymentProcess,
        processStatus,
    }
}
