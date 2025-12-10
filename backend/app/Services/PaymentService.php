<?php

namespace App\Services;

use DomainException;

use App\Models\Payment;
use App\Enums\PaymentStatus;

class PaymentService
{
    public function createPayment(float $amount, string $currency): Payment
    {
        return Payment::create([
            "amount" => $amount,
            "currency" => $currency,
            "status" => PaymentStatus::PENDING,
        ]);
    }

    public function processPayment(Payment $payment, bool $success): Payment
    {
        if ($payment->status !== PaymentStatus::PENDING) {
            throw new DomainException("Payment already processed");
        }

        $payment->update([
            "status" => $success
                ? PaymentStatus::SUCCESS
                : PaymentStatus::FAILED,
        ]);

        return $payment;
    }

    public function getPaymentByUuid(string $uuid): ?Payment
    {
        return Payment::where("uuid", $uuid)->first();
    }
}
