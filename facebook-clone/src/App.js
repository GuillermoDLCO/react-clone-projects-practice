import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
