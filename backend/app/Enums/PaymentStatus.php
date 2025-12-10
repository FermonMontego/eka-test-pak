<?php

namespace App\Enums;

enum PaymentStatus: string
{
    case PENDING = "pending";
    case SUCCESS = "success";
    case FAILED = "failed";

    public function isFinal(): bool
    {
        return $this !== self::PENDING;
    }
}
