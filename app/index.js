const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');

const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>EP Platform</title>
    <style>
      body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f4f4f4; }
      h1 { color: #2e6da4; }
      p { color: #333; font-size: 18px; }
      .version { margin-top: 20px; font-style: italic; color: #888; }
    </style>
  </head>
  <body>
    <h1>🚀 Hello from EP Platform on ECS!</h1>
    <p>This app is deployed with Terraform + GitHub Actions + Docker + Fargate</p>
    <div class="version">Deployed at: ${new Date().toLocaleString()}/ Verrsion:1.0.0</div>
  </body>
  </html>
`;

app.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(html);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
