const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require('method-override');
const firebase = require("firebase/auth");
// const firebase = require("firebase");

require('dotenv').config();

const app = express();
const routes = require('./routes');

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}?${process.env.MONGO_OPTIONS}`, {
   useNewUrlParser: true 
}).then(() => {
   console.log('Database connected!');
});

const config = {
   apiKey: process.env.FIREBASE_API_KEY,
   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.FIREBASE_DATABASE_URL,
   projectId: process.env.FIREBASE_PROJECT_ID,
   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
 };
 firebase.initializeApp(config);

app.use(methodOverride('_method'));
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333); 



// npm run dev
