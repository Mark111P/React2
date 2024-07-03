import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { About } from './Lb1';
import { Movie } from './Lb2';
import { AboutMe } from './Dz1';
import { Pet } from './Dz2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About></About><hr></hr>
    <Movie name='Movie name' imgSrc='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' actors={['Actor1', 'Actor2', 'Actor3']}></Movie><hr></hr>
    <AboutMe name='My name' imgSrc='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' skills={['C# - 2 years', 'JS - 1 year', 'React - 0 years']}></AboutMe><hr></hr>
    <Pet name='Pet' petImg='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'></Pet>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
