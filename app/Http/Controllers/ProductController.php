<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Color;
use App\Models\Product;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    /**
     * Display all resources.
     * 
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return array
     */
    public function index(Request $request) {
        $products = Product::all();
        return ProductResource::collection($products);
    }

    /**
     * Display specified resource.
     * 
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return array
     */
    public function show(Request $request, $id) {
        $product = Product::findOrFail($id);
        $product->colors = Color::find($product->colors);
        return new ProductResource($product);
    }

    /**
     * Store given resource.
     * 
     * @param \Illuminate\Http\Request $request
     * @param int $motif
     * @return boolean
     */
    public function store(Request $request, $product) {
        //$motifs = new Product();
    }
}
