<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ColorResource;
use App\Http\Resources\MotifResource;
use App\Http\Resources\ProductResource;

class OrderController extends Controller
{
    /**
     * Get specified resource.
     * 
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return array
     */
    public function get(Request $request, $id) {
        $order = Order::findOrFail($id);
        return new OrderResource($order);
    }

    /**
     * Store given resource.
     * 
     * @param \Illuminate\Http\Request $request
     * @param int $motif
     * @return boolean
     */
    public function store(Request $request, $motif) {
        //$motifs = new Motif();
    }
}
?>