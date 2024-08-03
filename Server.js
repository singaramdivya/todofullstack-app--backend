const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/ToDoRoute');
const userRoutes = require('./routes/UserRoute');
const registerRoutes = require('./routes/RegisterRoute');
const auth = require('./middleware/auth');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(err));

app.use('/api/register', registerRoutes);
app.use('/api/login', userRoutes);
app.use('/api/todos', auth, todoRoutes);

app.listen(PORT, () => console.log(`Listening on :${PORT}`)); 

