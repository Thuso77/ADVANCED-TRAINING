// Load Express
const express = require('express');
const app = express();

// Use environment port or fallback to 8080
const PORT = process.env.PORT || 80;

// Serve static files (e.g., index.html)
app.use(express.static(__dirname));

// Optional: route root to index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(PORT, () => {
  console.log(Server is running on port $80);
});
