import React from 'react';
import './App.scss';
import MovieSearch from "./components/MovieSearch";
import BackgroundImages from "./components/BackgroundImages";
import '../src/assets/icomoon.css';



function handleAddToHomescreenClick() {
  alert(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
};
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <BackgroundImages latest={'latest'}/>
        </header>
        <section className={'main-content'} >
          <MovieSearch />
        </section>
      </div>
  )
}

export default App;