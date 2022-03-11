<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

use App\Http\Controllers\ProductController;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\VoucherController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\RegisterController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register', [RegisterController::class, 'register']);
Route::controller(PostController::class)->group(function () {
    Route::get('Posts', 'index');
    Route::post('Posts', 'store');
});
Route::controller(CategoryController::class)->group(function () {
    Route::get('category', 'index');
    Route::post('category', 'store');
    Route::put('category/update/{id}', 'update');
    Route::delete('category/{id}', 'destroy');
});
Route::controller(ProductController::class)->group(function () {
    Route::get('products', 'index');
    Route::get('products/{id}', 'show');
    Route::post('products/category/{id}', 'showbycategory');
    Route::post('products/create', 'store');
    Route::post('products/update/{id}', 'update');
    Route::delete('products/detele/{id}', 'destroy');
});
Route::controller(VoucherController::class)->group(function () {
    Route::get('voucher', 'index');
    Route::post('voucher', 'store');
    Route::put('voucher/update/{id}', 'update');
    Route::delete('voucher/{id}', 'destroy');
});
Route::controller(BlogController::class)->group(function () {
    Route::get('blog', 'index');
    Route::post('blog', 'store');
    Route::put('blog/update/{id}', 'update');
    Route::delete('blog/{id}', 'destroy');
});