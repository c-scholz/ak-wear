<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::factory()
            ->create([
                "bundled" => false,
                "bundled_products" => [],
                "name" => 'Hoodie',
                "colors" => [1,2],
                "sizes" => ["s","m","l","xl","xxl","xxxl","xxxxl"],
                "prices" => [22],
                "default_image" => '/images/product_images/hoodies_paketbild.jpg'
            ])
            ->create([
                "bundled" => false,
                "bundled_products" => [],
                "name" => 'Shirt',
                "colors" => [1,2],
                "sizes" => ["xs", "s", "m", "l", "xl", "xxl", "xxxl"],
                "prices" => [16],
                "default_image" => '/images/product_images/shirts_paketbild.jpg'
            ])
            ->create([
                "bundled" => true,
                "bundled_products" => [1,2],
                "name" => 'Bundle',
                "colors" => [],
                "sizes" => [],
                "prices" => [33],
                "default_image" => '/images/product_images/bundles_paketbild.jpg'
            ]);
    }
}
