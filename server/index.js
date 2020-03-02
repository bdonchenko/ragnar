import express, { static } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/api/', createProxyMiddleware({
  target: 'https://localhost:5001',
  changeOrigin: true,
  secure: false
}));
app.use(static('./dist/ragnar'));
app.listen(80);
