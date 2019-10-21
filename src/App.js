import React from 'react';

import './App.css';
import Form from "./Form";
import Search from "./Search";
import MovieResultCard from "./MovieResultCard";
import FetchMovieData from "./fetchOMDB";
import CounterClass from "./HooksEx";
import CounterHooks from "./HooksFunction";
import Clicker from "./Clicker";
import SWMovies from "./Swapi";
import MovieData from "./MovieData";

function App() {
  return (
      <div className="App">
        {/*<SWMovies/>*/}
        {/*<Clicker />*/}
        <header className="App-header">
          <Form />

        </header>
        {/*<Search />*/}
      </div>
  )
}

export default App;
