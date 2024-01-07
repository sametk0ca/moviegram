import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LoginPage from './login';
import SignupPage from './signup';
import Home from './home';
import Movies from './movies';
import Shows from './shows';
import MovieInfo from './MovieInfo';
import UserPage from './UserPage';



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/shows' element={<Shows />} />
      <Route path='/MovieInfo' element={<MovieInfo />} />
      <Route path='/UserPage' element={<UserPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
