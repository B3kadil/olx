
import '../App.css';
import React from 'react';
import All from './components/All'
import Buisnes from './components/Buisnes'
import Private from './components/Private'
import { Routes, Route, Link } from 'react-router-dom'

function Main() {
  return (
    <main>
      <nav>
        <Link to="/">Все объявления</Link>
        <Link to="/buisnes">Бизнес</Link>
        <Link to="/private">Частные</Link>
      </nav>
      <Routes>
        <Route path='/' element={<All></All>} />
        <Route path='/buisnes' element={<Buisnes></Buisnes>} />
        <Route path='/private' element={<Private></Private>} />
      </Routes>
    </main>
  );
}

export default Main;
