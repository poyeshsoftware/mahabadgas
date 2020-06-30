<?php

namespace App\Http\Controllers;

use App\Http\Requests\DriverRequest;
use App\Http\Resources\DriverResource;
use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api']);
    }

    public function index()
    {
        return DriverResource::collection(Driver::get());
    }

    public function update($id, DriverRequest $request)
    {
        $driver = Driver::where('id', $id)->first();
        if ($driver) {
            $driver->update($request->validated());
        }

        return (new DriverResource($driver));
    }

    public function new(DriverRequest $request)
    {
        return (new DriverResource(Driver::create($request->validated())));
    }

    public function remove($id)
    {
        Driver::where('id', $id)->delete();

        return response()->json([
            'error' => 0,
            'message' => 'Operation Successful',
        ]);

    }
}
