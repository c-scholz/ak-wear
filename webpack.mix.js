const { webpackConfig } = require('laravel-mix');
const mix = require('laravel-mix');

// BUG: vue-loader doesn't handle file-loader's default esModule:true setting properly causing
// <img src="[object module]" /> to be output from vue templates.
// WORKAROUND: Override mixs and turn off esModule support on images.
// FIX: When vue-loader fixes their bug AND laravel-mix updates to the fixed version
// this can be removed
mix.override(webpackConfig => {
    webpackConfig.module.rules.forEach(rule => {
        if (rule.test.toString() === '/(\\.(png|jpe?g|gif|webp)$|^((?!font).)*\\.svg$)/') {
            if (Array.isArray(rule.use)) {
            rule.use.forEach(ruleUse => {
                if (ruleUse.loader === 'file-loader') {
                    ruleUse.options.esModule = false;
                }
            });
            }
        } 
    });
});

mix.webpackConfig({
    devServer: {
        host: '0.0.0.0',
        port: 8080
    }
})

mix.options({
    hmrOptions: {
        host: 'localhost',
        port: 8080,
    },
})
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
    .copy('resources/assets/product_images', 'public/images/product_images')
    .copy('resources/assets/favicon', 'public/images/favicon')
    .autoload({ 
        'jquery': ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'] 
    })
    .js('resources/js/app.js', 'public/js')
    .sass('resources/css/app.scss', 'public/css')
    .sourceMaps()
    .vue();
