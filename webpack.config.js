const path = require('path');

module.exports = {
  entry: './src/websocket/client.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  }
};