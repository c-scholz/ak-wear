<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Color;
use App\Http\Resources\ColorResource;

class ColorController extends Controller
{
    /**
     * Display specified resource.
     * 
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return array
     */
    public function show(Request $request, $id) {
        $color = Color::findOrFail($id);
        return new ColorResource($color);
    }

    /**
     * Store given resource.
     * 
     * @param \Illuminate\Http\Request $request
     * @param int $motif
     * @return boolean
     */
    public function store(Request $request, $color) {
        //$motifs = new Motif();
    }
}
