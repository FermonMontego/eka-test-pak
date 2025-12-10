<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            "uuid" => $this->uuid,
            "amount" => (float) $this->amount,
            "currency" => $this->currency,
            "status" => $this->status,
            "created_at" => $this->created_at?->toISOString(),
        ];
    }
}
