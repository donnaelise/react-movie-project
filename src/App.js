import React from 'react';
import './App.scss';
import MovieSearch from "./components/MovieSearch";
import BackgroundImages from "./components/BackgroundImages";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <BackgroundImages latest={'latest'}/>
          <MovieSearch />
        </header>
      </div>
  )
}

export default App;
