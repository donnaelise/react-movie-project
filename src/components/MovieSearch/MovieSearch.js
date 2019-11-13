import React, {useState, useEffect} from 'react';
import MovieSearchResults from "../MovieSearchResults/MovieSearchResults";
import './MovieSearch.scss';
import $ from "jquery";
import MediaResultCard from "../MediaResultCard";
import MediaTypeFilter from "../MediaTypeFilter/MediaTypeFilter";

function MovieSearch (){
  const[query, setQuery] = useState('');
  const[transitionEnded, setTransitionEnded] = useState('true');
  const[searchFilter, setSearchFilter] = useState('movie');
  const[searchActive, setSearchActive] = useState(false);

  const filterOptions = [
    {
      label: 'Movie',
      value: 'movie'
    },
    {
      label: 'TV Show',
      value: 'tv'
    },
    {
      label: 'Person',
      value: 'person'
    }
  ];

  useEffect(()=>{
    if(!query) {
      setSearchActive(false);
    } else {
      setSearchActive(true);
    }
  }, [query]);

  function handleChange(e){
    setQuery(e.target.value);
    document.getElementById('searchForm').addEventListener('transitionend', () => {
      setTransitionEnded(true);
    });
  }

  function handleResetInput(e){
    e.preventDefault();
    setQuery('');
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

  function checkIfResults(){
    if($('.listResults li').length < 1){
      $('.searchTitle').text(`No results for "${query}".`);
    }
    if($('.listResults li').length >= 1){
      $('.searchTitle').text(`Results for "${query}"`);
    }
  }

  return (
      <React.Fragment>
        <h1 className={'home__title' + ((searchActive) ? ' search-active' : '')} onClick={handleResetInput}>Movie Database</h1>
        <form id={'searchForm'} className={((searchActive) ? ' search-active' : '') }>
          <div className={'searchBar'}>
            <div className={'searchInput'}>
              <div className={'searchField'}>
                <input id={'searchFormInput'} name={"searchInput"} className={'searchFormInput'} type="text" placeholder={`Search for a ${searchFilter}`} value={query} onFocus={onFocus} onChange={e=>handleChange(e)}></input>
                <label htmlFor={'searchInput'}>Search for a {searchFilter ? searchFilter : 'movie, tv show or actor' }
                </label>
              </div>
              <div className={'resetInput'} onClick={handleResetInput}><span className={'icon-x'}> </span> </div>
            </div>
            <button className={'button button-search'} onClick={handleClick}><span className="icon-search"> </span>Search</button>
          </div>
          <MediaTypeFilter options={filterOptions} onChange={handleRadioChange} currentSelection={searchFilter}/>
        </form>

        {checkIfResults()}
        {query && transitionEnded?
            <section className={'searchResultsContainer'} id={'resultContainer'}>
              <h3 className={'searchTitle'}></h3>
              <MovieSearchResults searchquery={query} searchFilter={searchFilter}/>
            </section> : ''}
      </React.Fragment>
  )
}

export default MovieSearch;