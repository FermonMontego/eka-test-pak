<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePaymentRequest;
use App\Http\Requests\ProcessPaymentRequest;
use App\Http\Resources\PaymentResource;

use App\Services\PaymentService;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class PaymentController extends Controller
{
    public function create(
        CreatePaymentRequest $request,
        PaymentService $service,
    ): JsonResponse {
        $payment = $service->createPayment(
            $request->amount,
            $request->currency,
        );

        return response()->json(
            [
                "payment_uuid" => $payment->uuid,
            ],
            Response::HTTP_CREATED,
        );
    }

    public function process(
        ProcessPaymentRequest $request,
        string $uuid,
        PaymentService $service,
    ): JsonResponse {
        $payment = $service->getPaymentByUuid($uuid);

        if (!$payment) {
            return response()->json(
                ["error" => "Payment not found"],
                Response::HTTP_NOT_FOUND,
            );
        }

        try {
            $service->processPayment(
                $payment,
                $request->boolean('success'),
            );
        } catch (\DomainException $e) {
            return response()->json(
                ["error" => $e->getMessage()],
                Response::HTTP_BAD_REQUEST,
            );
        }

        return response()->json(
            new PaymentResource($payment),
            Response::HTTP_OK,
        );
    }

    public function show(string $uuid, PaymentService $service): JsonResponse
    {
        $payment = $service->getPaymentByUuid($uuid);

        if (!$payment) {
            return response()->json(
                ["error" => "Payment not found"],
                Response::HTTP_NOT_FOUND,
            );
        }

        return response()->json(
            new PaymentResource($payment),
            Response::HTTP_OK,
        );
    }
}
