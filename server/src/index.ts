import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import flightPriceRoutes from './routes/flightDetails';

const app = express();
app.use(express.json());
app.use(cors());

const mongoUri =
  'mongodb+srv://mudittiwari2000:Mudyeet2809@cluster0.bvza6e7.mongodb.net/?retryWrites=true&w=majority';

connectDB().catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(mongoUri);
  if (process.env.NODE_ENV !== 'production')
    console.log('Connected to mongodb');
}

app.get('/', (req, res) => {
  res.send('Flight Price API');
});

app.use('/api/flight-prices', flightPriceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
