import React, {useState} from 'react';
import MovieSearchResults from "../MovieSearchResults/MovieSearchResults";
import './MovieSearch.scss';

function MovieSearch (){
  const[query, setQuery] = useState('hello');
  const[transitionEnded, setTransitionEnded] = useState('true');
  const[searchFilter, setSearchFilter] = useState('person');

  function handleChange(e){
    setQuery(e.target.value);
    document.body.style.backgroundImage = `none`;
    document.getElementById('searchForm').classList.remove('center');
    document.getElementById('searchForm').classList.add('searchBarToTop');
    document.getElementById('searchForm').addEventListener('transitionend', () => {
      console.log('Transition ended');
      setTransitionEnded(true);
    });
  }

  function handleClearSearch(e){
    e.preventDefault();
    setQuery('');
    document.getElementById('searchForm').reset();
    document.getElementById('searchForm').classList.add('center')
  }

  function handleResetInput(e){
    e.preventDefault();
    setQuery('');
    document.getElementById('searchForm').reset();
    document.getElementById('searchFormInput').focus();
  }

  function handleClick(e){
    e.preventDefault();
    if(document.getElementById('searchForm').classList.contains('center')) {
      setTransitionEnded(false)
    }
  }

  function onFocus(event){
    event.placeholder = '';
  }
  function handleRadioChange(e){
    setSearchFilter(e.target.value);
  }

  return (<React.Fragment>
        <form id={'searchForm'} className={''}>
          <div className={'searchInput'}>
            <input id={'searchFormInput'} className={'searchFormInput'} type={'text'} placeholder={'search'} onFocus={onFocus} onChange={e=>handleChange(e)}/>
            <div className={'resetInput'} onClick={handleResetInput}> 𝗫 </div>
          </div>
          <button onClick={handleClick}>Search</button>
          <button onClick={handleClearSearch}>start over</button>
          <div id={'filterSearch'}>
            <label>
              <input type="radio" name="filterSearch" value="movie" onChange={handleRadioChange}/>
              Movie
            </label>
            <label>
              <input type="radio" name="filterSearch" value="tv" onChange={handleRadioChange}/>
              TV Shows
            </label>
            <label>
              <input type="radio" name="filterSearch" value="person" checked={searchFilter === 'person'} onChange={handleRadioChange}/>
              Person
            </label>
          </div>
        </form>
        {query && transitionEnded?
            <div className={'searchResultsContainer'}>
              <h3>Results for: {query}</h3>
              <MovieSearchResults
                  searchquery={query}
                  searchFilter={searchFilter}
              />
            </div> : ''}
      </React.Fragment>
  )
}

export default MovieSearch;