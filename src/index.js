import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './component/Banner';
import Movies from './component/Movies';
import Navbar from './component/Navbar';
import Pagination from './component/Pagination';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar />
  <Banner />
  <Movies /> 
  <Pagination />
  </>
);


