<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PaymentController;

Route::prefix('payments')->group(function () {
    Route::post('/', [PaymentController::class, 'create']);
    Route::post('/{uuid}/process', [PaymentController::class, 'process']);
    Route::get('/{uuid}', [PaymentController::class, 'show']);
});
