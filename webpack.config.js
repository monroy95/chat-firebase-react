// modulo path ayuda a manejar las rutas en cualquier sistema operativo
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Agregando configuracion de webpack
module.exports = {
  // Archivos que recibe de entrada
  entry: {
    app: './src/index.js' //, se pueden agregar mas archivos para que los tome webpack .js
  },
  // Salida: Aqui se colocan los archivos luego de traducirlos
  output: {
    // Ubicacion
    // __dirname hace referencia a la ruta raiz
    // dist hace referencia al destino donde se colocaran los archivos finales
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // devServer: permite tener un servidor en vivo, este solamente aplica en la fase desarrollo
  devServer: {
    contentBase: './dist', // esta propiedad le indica a devserver que tome los archivos de la carpeta dist, dist es generada por webpack con los archivos finales
    port: 3000 // El servidor se levanta en el puerto 3000
  },
  // Modulos para que pueda traducir el codigo
  module: {
    // Reglas, cada objeto es una configuracion de archivos
    rules: [{
        test: /\.js$/, // testea todos los archivos con la extension .js
        loader: 'babel-loader', // testea los archivos con la ayuda de babel
        exclude: /node_modules/,
        // Toma los presets
        query: {
          presets: ['react', 'env']
        }
      },
      {
        // testeo para los archivos html
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      }
    ]
  },
  // Agregando Plugins
  plugins: [
    // nueva instancia
    new HtmlWebpackPlugin({
      template: './src/index.html', // Toma el archivo .html
      filename: './index.html' // despues de tomar el archivo .html que lo coloque aqui
    })
  ]
}