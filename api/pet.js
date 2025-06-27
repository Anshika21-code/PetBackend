const express = require('express');
const app = express();

// Your routes here
app.get('/', (req, res) => {
  res.json({ message: 'Pet API is running!' });
});

app.get('/api/pets', (req, res) => {
  // Your pets logic
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;