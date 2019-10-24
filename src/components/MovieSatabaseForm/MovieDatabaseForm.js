import React, {useState, useEffect} from 'react';
import MovieSearchResults from "../MovieSearchResults";
import './MovieDatabaseForm.scss';

function MovieDatabaseForm (){
  const[query, setQuery] = useState('joker');
  const[movieSearch, setMovieSearch] = useState();

  function handleChange(e){
    setQuery(e.target.value)
  }

  function handleClearSearch(e){
    e.preventDefault();
    setMovieSearch('');
    setQuery('')
    document.getElementById('searchForm').reset();
  }

  function handleResetInput(e){
    e.preventDefault();
    setQuery('');
    document.getElementById('searchForm').reset();
    document.getElementById('searchFormInput').focus();
  }

  function handleClick(e){
    e.preventDefault();
    setMovieSearch(query)
  }

  function onFocus(event){
    event.placeholder = '';
  }

  return (<React.Fragment>
        <form id={'searchForm'}>
          <div className={'searchInput'}>
            <input id={'searchFormInput'} className={'searchFormInput'} type={'text'} placeholder={'search'} onFocus={onFocus} onChange={e=>handleChange(e)}/>
            <div className={'resetInput'} onClick={handleResetInput}> 𝗫 </div>
          </div>
          <button onClick={handleClick}>Search</button>
          <button onClick={handleClearSearch}>start over</button>
        </form>
        {movieSearch ?
            <div>Search for: {movieSearch}
              <MovieSearchResults
                  searchquery={movieSearch}
                  // selection={(val)=>console.log(val)}
              />
            </div> : ''}
      </React.Fragment>
  )
}

export default MovieDatabaseForm;