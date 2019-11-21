const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://Marina:cpejr123@cluster0-lvcfr.mongodb.net/leads-app?retryWrites=true&w=majority', {
   useNewUrlParser: true 
}).then(() => {
   console.log('Database connected!');
});

app.use(methodOverride('_method'));
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333); 

// npm run dev
