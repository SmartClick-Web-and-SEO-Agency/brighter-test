const mix = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

mix
  .js('src/js/app.js', 'js/app.js')
  .sass('src/scss/app.scss', 'css/').options({
    processCssUrls: false
  });

mix.webpackConfig({
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: 'src/images',
        to: 'images',
      }]
    }),
    // new ImageminPlugin({
    //   test: /\.(jpe?g|png|gif)$/i,
    //   plugins: [
    //     imageminMozjpeg({
    //       quality: 80,
    //     })
    //   ]
    // }),
    new SVGSpritemapPlugin('src/icons/**/*.svg', {
      output: {
        filename: 'images/icons/sprite.svg',
        svg: {
          sizes: true
        },
        svgo: {
          plugins: [
            {
              name: 'addAttributesToSVGElement',
              params: {
                attributes: [
                  {
                    'style': 'position:absolute;height:0;width:0',
                    'aria-hidden': 'true' 
                  }
                ]
              }
            }
          ]
        }
      },
      sprite: {
        prefix: '',
        generate: {
          title: true
        }
      },
    })
  ]
});

mix.extract()
  .sourceMaps()
  .setPublicPath('public_html');

if(!mix.inProduction()) {
    mix.browserSync({
        proxy: 'morphetteville.test',
        notify: false,
        open: false,
        files: [
            'public_html/css/**/*.css',
            'public_html/js/**/*.js',
            '**/*',
        ]
    });
}

// if (mix.inProduction()) {
//   mix.version();
// }
