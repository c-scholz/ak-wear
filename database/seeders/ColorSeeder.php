<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Color;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Color::factory()
            ->create([
                "name" => 'schwarz',
                "color_values" => ['#000000'],
                "thumbnail" => ''
            ])
            ->create([
                "name" => 'weiß',
                "color_values" => ['#ffffff'],
                "thumbnail" => ''
            ]);
    }
}
