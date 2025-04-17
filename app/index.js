const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello from Platform Engineering!');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
