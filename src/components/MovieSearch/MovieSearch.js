import React, {useState, useEffect} from 'react';
import MovieSearchResults from "../MovieSearchResults/MovieSearchResults";
import './MovieSearch.scss';
import $ from "jquery";

function MovieSearch (){
  const[query, setQuery] = useState('');
  const[transitionEnded, setTransitionEnded] = useState('true');
  const[searchFilter, setSearchFilter] = useState('movie');

  useEffect(()=>{
    resizeNavbar()
  }, [query]);

  function handleChange(e){
    setQuery(e.target.value);
    document.body.style.backgroundImage = `none`;
    document.getElementById('searchForm').classList.remove('center');
    document.getElementById('searchForm').classList.add('searchBarToTop');
    document.getElementById('searchForm').addEventListener('transitionend', () => {
      setTransitionEnded(true);
    });
  }

  function handleResetInput(e){
    e.preventDefault();
    setQuery('');
    document.getElementById('searchForm').reset();
    document.getElementById('searchFormInput').focus();
  }

  function resizeNavbar(){
    if(query) {
      $('.home__title').addClass('home__title--small');
      $('.filterLabel').addClass('filterLabel--small')
      $('#searchForm').addClass('searchForm--small');
    }
    if(!query){
      $('.home__title').removeClass('home__title--small');
      $('.filterLabel').removeClass('filterLabel--small')
      $('#searchForm').removeClass('searchForm--small');
    }
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
        <h1 className={'home__title'}>Movie Database</h1>
        <form id={'searchForm'} className={'searchForm searchBarTop'}>
          <div className={'searchBar'}>
            <div className={'searchInput'}>
              <input id={'searchFormInput'} className={'searchFormInput'} type={'text'} placeholder={'search'} onFocus={onFocus} onChange={e=>handleChange(e)}/>
              <div className={'resetInput'} onClick={handleResetInput}><span className={'icon-x'}> </span> </div>
            </div>
            <button className={'button button-search'} onClick={handleClick}><span className="icon-search"> </span>
              Search</button>
          </div>
          <div id={'filterSearch'}>
            <label className={'filterLabel'}>
              <input type="radio" name="filterSearch" value="movie" checked={searchFilter === 'movie'} onChange={handleRadioChange}/>
              <span className={'checkmark'}> </span> Movie
            </label>
            <label className={'filterLabel'}>
              <input type="radio" name="filterSearch" value="tv" checked={searchFilter === 'tv'} onChange={handleRadioChange}/>
              TV Shows
              <span className={'checkmark'}> </span>
            </label>
            <label className={'filterLabel'}>
              <input type="radio" name="filterSearch" value="person" checked={searchFilter === 'person'} onChange={handleRadioChange}/>
              Person
              <span className={'checkmark'}> </span>
            </label>
          </div>
        </form>

        {query && transitionEnded?
            <section className={'searchResultsContainer'} id={'resultContainer'}>
              <h3 className={'searchTitle'}>Results for: {query}</h3>
              <MovieSearchResults
                  searchquery={query}
                  searchFilter={searchFilter}
              />
            </section> : ''}
      </React.Fragment>
  )
}

export default MovieSearch;