import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcB_75GQUjcn4CRL3tbXFW2W3XQZaICec",
  authDomain: "techreact-5d21d.firebaseapp.com",
  projectId: "techreact-5d21d",
  storageBucket: "techreact-5d21d.appspot.com",
  messagingSenderId: "1000098545153",
  appId: "1:1000098545153:web:66e971cbd8980ad3720a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
