<?php
namespace App\Http\Controllers;
use App\Http\Controllers\CKEditorController;
use App\Http\Middleware\checkAdminLogin;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('register', [RegisterController::class, 'register']);
Route::get('/',  [AdminLoginController::class, 'getLogin'])->name('getLogin');
Route::post('/', [AdminLoginController::class, 'postLogin']);
// Route::get('quantri', [AdminLoginController::class, 'index'])->middleware('checkAdminLogin');


Route::get('logout', [AdminLoginController::class, 'getLogout']);
Route::group(['middleware' => 'checkAdminLogin', 'prefix' => 'quantri'], function() {
	Route::get('/', [AdminLoginController::class, 'index'])->middleware('checkAdminLogin');
    Route::get('product', [ProductController::class, 'GetAll']);
    Route::controller(CategoryController::class)->group(function () {
        Route::get('category', 'GetAll');
        Route::post('category', 'store');
        Route::put('category/update/{id}', 'update');
        Route::delete('category/detele/{id}', 'destroy');
    });
    Route::controller(VoucherController::class)->group(function () {
        Route::get('voucher', 'GetAll');
        Route::post('voucher', 'store');
        Route::put('voucher/update/{id}', 'update');
        Route::delete('voucher/detele/{id}', 'destroy');
    });
    Route::controller(BlogController::class)->group(function () {
        Route::get('blog', 'GetAll');
        Route::get('blog/create', function () {
            return  view('admin.blog.create');
        });
        Route::put('blog/update/{id}', 'update');
        Route::delete('blog/detele/{id}', 'destroy');
    });
});
