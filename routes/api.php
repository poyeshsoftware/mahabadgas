<?php

use Illuminate\Http\Request;


Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {
    Route::post('/sign-in', 'SignInController');
    Route::post('/sign-out', 'SignOutController');
    Route::any('/me', 'MeController');
    Route::post('/admins', 'AdminCfontroller@index');
    Route::post('/new', 'AdminController@new');
    Route::post('/update', 'AdminController@update');
    Route::delete('/delete', 'AdminController@remove');
});

Route::group(['prefix' => 'drivers'], function () {
    Route::get('/', 'DriverController@index');
    Route::post('/update/{id}', 'DriverController@update')->where('id', '[0-9]+');
    Route::delete('/remove/{id}', 'DriverController@remove')->where('id', '[0-9]+');
    Route::post('/new', 'DriverController@new');
});

Route::group(['prefix' => 'vehicles'], function () {
    Route::get('/', 'VehicleController@index');
    Route::post('/update/{id}', 'VehicleController@update')->where('id', '[0-9]+');
    Route::delete('/remove/{id}', 'VehicleController@remove')->where('id', '[0-9]+');
    Route::post('/new', 'VehicleController@new');
});

Route::group(['prefix' => 'categories'], function () {
    Route::get('/', 'CategoryController@index');
    Route::post('/update/{id}', 'CategoryController@update')->where('id', '[0-9]+');
    Route::delete('/remove/{id}', 'CategoryController@remove')->where('id', '[0-9]+');
    Route::post('/new', 'CategoryController@new');
});

Route::group(['prefix' => 'factors'], function () {
    Route::get('/', 'FactorController@index');
    Route::post('/update/{id}', 'FactorController@update')->where('id', '[0-9]+');
    Route::delete('/remove/{id}', 'FactorController@remove')->where('id', '[0-9]+');
    Route::post('/new', 'FactorController@new');
});

Route::group(['prefix' => 'access'], function () {
    Route::get('/', 'AccessController@index');
    Route::post('/update/{id}', 'AccessController@update')->where('id', '[0-9]+');
    Route::delete('/remove/{id}', 'AccessController@remove')->where('id', '[0-9]+');
    Route::post('/new', 'AccessController@new');
});

Route::group(['prefix' => 'upload'], function () {
    Route::post('/new', 'UploadController@new');
});

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
