<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'bundled',
        'bundled_products',
        'name',
        'colors',
        'motifs',
        'sizes',
        'prices',
        'default_image'
    ];
    
    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'bundled_products' => 'array',
        'colors' => 'array',
        'motifs' => 'array',
        'sizes' => 'array',
        'prices' => 'array',
    ];
}