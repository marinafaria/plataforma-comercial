import React from 'react';
import './App.css';
import Routes from './routes.js';
import firebase from "firebase/app";
require("firebase/auth");
require('dotenv').config();


function App() {

  var firebaseConfig = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appID: "app-id",
  };

  return (
    <Routes />
  );
}

export default App;
