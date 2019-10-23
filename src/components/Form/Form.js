import React, {useState, useEffect} from 'react';
import MovieSearchComponent from "../MovieSearchComponent";
import MovieSelected from "../MovieSelected";
import './form.scss';

function Form (){
  const[query, setQuery] = useState('hello');
  const[selection, setSelection] = useState('');
  const[movieSearch, setMovieSearch] = useState();

  function handleChange(e){
    setQuery(e.target.value)
  }
  console.log('loaded');

  function handleSelection(val){
    setSelection(val)
  }

  function handleClearSelection(){
    setSelection('')
  }

  function handleClearSearch(e){
    e.preventDefault();
    setMovieSearch('');
    setSelection('')
  }

  function handleClick(e){
    e.preventDefault();
    setMovieSearch(query)
  }

  return (<React.Fragment>
        <form>
          <input type={'text'} placeholder={'search'} onChange={e=>handleChange(e)}/>
          <button onClick={handleClick}>Search</button>


          {movieSearch ?
              <div>Search for: {movieSearch}
          <button onClick={handleClearSearch}>delete</button>

            {selection? <MovieSelected id={selection} close={handleClearSelection}/> : ''}
            <MovieSearchComponent searchquery={movieSearch} selection={handleSelection}/>
              </div> : ''}


        </form>
      </React.Fragment>
  )
}

export default Form;