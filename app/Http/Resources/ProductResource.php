<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'bundled' => $this->bundled,
            'bundled_products' => $this->bundled_products,
            'name' => $this->name,
            'colors' => $this->colors,
            'motifs' => $this->motifs,
            'sizes' => $this->sizes,
            'prices' => $this->prices,
            'default_image' => $this->default_image,
        ];
    }
}
