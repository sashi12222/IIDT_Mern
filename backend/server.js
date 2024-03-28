

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://your-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/data', dataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
