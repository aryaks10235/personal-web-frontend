const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Backend API is running locally!' });
});

// Endpoint menggunakan data lokal dari data.js
app.get('/api/education', (req, res) => {
  try {
    res.status(200).json(educationHistory);
  } catch (error) {
    console.error('Error fetching education:', error);
    res.status(500).json({ error: 'Gagal mengambil data pendidikan' });
  }
});

app.get('/api/skills', (req, res) => {
  try {
    res.status(200).json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Gagal mengambil data skill' });
  }
});

app.get('/api/projects', (req, res) => {
  try {
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Gagal mengambil data proyek' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
