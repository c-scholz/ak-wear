const mix = require('laravel-mix');
require('laravel-mix-favicon');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copy('resources/assets/motifs', 'public/images/motifs')
    .copy('resources/assets/product_images', 'public/images/product_images').autoload({ 
        'jquery': ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'] 
    })
    .favicon({
        inputPath: 'resources/assets/favicon',
        inputFile: '*.{jpg,png,svg}',
        publicPath: 'public',
        output: 'images/favicon',
        dataFile: 'data/faviconData.json',
        blade: false,
        reload: false,
        debug: false,
        configPath: './realfavicongenerator-config.json',
        cleaner: {
            use: false,
            path: null,
            timestamp: true
        }
    })
    .js('resources/js/app.js', 'public/js')
    .sass('resources/css/app.scss', 'public/css')
    .sourceMaps();
