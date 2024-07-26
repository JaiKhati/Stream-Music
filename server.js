const express = require('express');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/auth');
const musicRoutes = require('./routes/music');

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/music', musicRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Music Streaming Platform');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
