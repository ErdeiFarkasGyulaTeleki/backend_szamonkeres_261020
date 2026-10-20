import express, { json } from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('AHHH');
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});