<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Orders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->boolean('accepted');
            $table->boolean('in_production');
            $table->boolean('shipped');
            $table->string('shipping_forename');
            $table->string('shipping_surname');
            $table->string('shipping_address');
            $table->string('billing_forename');
            $table->string('billing_surname');
            $table->string('billing_address');
            $table->json('order');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('orders');
    }
}
