<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;

if (App::environment('production')) {
    \URL::forceScheme('https');
}
Route::get('/{any}', 'ApplicationController')->where('any', '.*');
