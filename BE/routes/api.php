<?php
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
  
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\SetTokenLaySPController;
use App\Http\Controllers\API\LoginController;
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
Route::get('postproducts', [ProductController::class, 'index']);
Route::post('createproducts', [ProductController::class, 'store']);
Route::delete('deleteproducts/{id}', [ProductController::class, 'destroy']);
Route::get('getproductsbytoken', [SetTokenLaySPController::class, 'index']);
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
     
Route::post('login', [LoginController::class, 'login']);
Route::middleware('auth:api')->group( function () {
    Route::resource('products', ProductController::class);
});