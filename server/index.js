const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api/', createProxyMiddleware({
  target: 'https://localhost:5001',
  changeOrigin: true,
  secure: false
}));
app.use(express.static('./dist/ragnar'));
app.listen(80);
