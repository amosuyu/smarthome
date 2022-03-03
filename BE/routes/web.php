<?php

/** @var \Laravel\Lumen\Routing\Router $router */
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['prefix' => 'api', 'middleware' => ['cors']], function () use ($router) {

    // Category
    $router->get('/category', 'CategoryController@index');
    $router->post('/category', 'CategoryController@store');
    $router->put('/category/update/{id}', 'CategoryController@update');
    $router->delete('/category/{id}', 'CategoryController@destroy');
    // Product
    $router->get('/products', 'ProductController@index');
    $router->get('/products', 'ProductController@index');
    $router->get('/products/{id}', 'ProductController@show');
    $router->get('/products/category/{id}', 'ProductController@showbycategory');
    $router->post('/products/create', 'ProductController@store');
    $router->post('/products/update/{id}', 'ProductController@update');
    $router->delete('/products/detele/{id}', 'ProductController@destroy');
    // post
    $router->get('/Posts', 'PostController@index');
    $router->post('/Posts', 'PostController@store');
    $router->post('/Posts/{id}', 'PostController@update');
    $router->delete('/Posts/{id}', 'PostController@destroy');
});
