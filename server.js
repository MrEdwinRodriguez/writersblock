const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connecting to database
connectDB();

app.use(express.json({extended: false}))

app.get('/', (req, res) => res.send('API Running'))

//Define Routes;
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/writing', require('./routes/api/writing'));
app.use('/api/feedback', require('./routes/api/feedback'));
app.use('/api/book', require('./routes/api/book'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
