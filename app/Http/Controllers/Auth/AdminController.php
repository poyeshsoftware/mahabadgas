<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdminResource;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth:api']);
    }

    public function index()
    {
        User::get();
    }

    public function update()
    {

    }

    public function new()
    {

    }

    public function remove()
    {

    }
}
