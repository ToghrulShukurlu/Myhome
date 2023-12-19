import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './layout/Footer';
import Nav from './layout/Nav';
import Home from './Pages/Home';
import './reset.scss'
import { NavLink } from 'react-router-dom';
import AppRouter from './router/AppRouter';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
   <AppRouter/>
  </>
);
