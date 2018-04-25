# TODO's and Errors
-
### Webpack
    npm install -g webpack
Didn't install webpack

    npm install --save-dev webpack, 
    
Gives a lot of errors

>   Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema. - configuration.module has an unknown property 'loaders'. These properties are valid:
    object { exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, noParse?, rules?, defaultRules?, unknownContextCritical?, unknownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp?, strictExportPresence?, strictThisContextOnImports? }
    -> Options affecting the normal modules (`NormalModuleFactory`).
    


Commands that installed - but didn't work

    npm i -g webpack-cli, npm install --save-dev webpack, npm install -g webpack
    
I found a fix for webpack-cli! (I think that this works good)
-
So this was my old code 

webpack.config.js

    var path = require('path');
    module.exports = {
     entry: './src/main/resources/public/App.js',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'bundle.js',
         publicPath: '/'
     },
     module: {
         loader: [
             {
                 test: /.js$/,
                 loaders: 'babel-loader',
                 exclude: /(node_modules)/,
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     }
    };

 Because instruction I got were a bit old and outdated.... So I had to search web a bit...
 
##### I found something and it got rid of errors!
 
I had:
 
    loader :[]
        
But the newest webpack does not use that anymore! So I had to change it to:

    rules: []
    
And this is how my code looks like now.
    
    var path = require('path');
    module.exports = {
      entry: './src/main/resources/public/App.js',
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js',
          publicPath: '/'
      },
      module: {
          rules: [
              {
                  test: /.js$/,
                  loaders: 'babel-loader',
                  exclude: /(node_modules)/,
                  query: {
                      presets: ['es2015', 'react']
                  }
              }
          ]
      }
    };
  
###Webpack.config.js

When you first run the:

    webpack-cli
    
You can get an error, something like this:
>WARNING in configuration
 The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
 You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
 
 It is easy to fix. You just have to set the mode:
 
    var path = require('path');
    module.exports = {
      mode: "production", <--this was added
      entry: './src/main/resources/public/App.js',
      output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js',
          publicPath: '/'
      },
      module: {
          rules: [
              {
                  test: /.js$/,
                  loaders: 'babel-loader',
                  exclude: /(node_modules)/,
                  query: {
                      presets: ['es2015', 'react']
                  }
              }
          ]
      }
    };
    
