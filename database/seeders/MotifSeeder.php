<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Motif;

class MotifSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Motif::factory()
            ->create([
                "name" => 'Wegflix',
                "front_image" => '/images/motifs/M024_wegflix_druck_Kopie.svg',
                "back_image" => '/images/motifs/M024-R_wegflix_druck_Kopie.svg',
                "colors" => [1,2]
            ])
            ->create([
                "name" => 'Abschlussmeister',
                "front_image" => '/images/motifs/M096_abschlussmeister_v3_druck_Kopie.svg',
                "back_image" => '/images/motifs/M096-R_abschlussmeister_v3_druck_Kopie.svg',
                "colors" => [1,2]
            ]);
    }
}
