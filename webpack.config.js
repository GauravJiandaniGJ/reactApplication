var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
           test: /\.css$/,
           use: [ 'style-loader', require.resolve('css-loader') ]
         },
         {
           test: /\.scss$/,
           loaders: ["style-loader", require.resolve('css-loader'), "sass-loader"]
         }
      ],
      rules: [
            {
              test: /\.css$/,
              use: [ 'style-loader', require.resolve('css-loader') ]
            },
            {
              test: /\.scss$/,
              loaders: ["style-loader", require.resolve('css-loader'), "sass-loader"]
            },
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                  presets: ['es2015', 'react']
               }
            }
      ]
   }
}
module.exports = config;