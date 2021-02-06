<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Color;
use App\Models\Motif;
use App\Http\Resources\MotifResource;

class MotifController extends Controller
{
    /**
     * Display specified resource.
     * 
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return array
     */
    public function show(Request $request, $id) {
        $motif = Motif::findOrFail($id);
        $motif->colors = Color::find($motif->colors);
        return new MotifResource($motif);
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
