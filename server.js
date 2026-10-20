import express from 'express';
import pool from './db.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/api/konyvek', async (req, res) => {
  try {
    const [response] = await pool.query('SELECT * FROM termekek');
    return res.status(200).json(response);
  }
  catch (error) {
    console.log(`Hiba: ${error}`);
    return res.status(500).json({ error: error });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});