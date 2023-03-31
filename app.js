const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db.json');
const app = express();

app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


app.get('/locations', (req, res) => {
  res.json(db.employee.map(({ name, lat, lng, district }) => ({
    type: 'Feature',
    properties: { 
      name:name,
      district:district
     },
    geometry: { type: 'Point', coordinates: [lng, lat] }
  })));
});

// Route to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));





