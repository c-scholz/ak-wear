<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SinglePageApplicationController extends Controller
{
    /**
     * Show SPA view.
     * 
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function show(Request $request) {
        return view('app');
    }
}
