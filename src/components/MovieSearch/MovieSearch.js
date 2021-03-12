import React, {useState, useEffect} from 'react';
import MovieSearchResults from "../MovieSearchResults/MovieSearchResults";
import './MovieSearch.scss';
import getMovieData from "../utilities/movieApiSearch";
import { H1, H2 } from '../ui-library/Headings'
import MediaResultCard from "../MediaResultCard";
import MediaTypeFilter from "../MediaTypeFilter/MediaTypeFilter";


function MovieSearch () {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [searchFilter, setSearchFilter] = useState('movie');
  const [hasResults, setHasResults] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);

  const minQueryLength = 3;

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


  function search(query) {
    if (query.length < minQueryLength) {
      setResults(null);
      setHasResults(false);
      return;
    }

    if (results == null) {
      setHasResults(false);
    }
    getMovieData(query).then(({results}) => {
      setResults(results);
      setHasResults(true);
    })
  }

  function handleChange(e){
    setQuery(e.target.value);
    search(query);
  }

  function handleClearSearch(e){
    e.preventDefault();
    setQuery('');
    document.getElementById('searchFormInput').focus();
  }

  function handleClick(e){
    e.preventDefault();
  }

  function handleRadioChange(e){
    setSearchFilter(e.target.value);
  }

  const resultCards = () => {
    if (results) {
      return results.map((result) =>
          <MediaResultCard key={result.id} result={result} />
      )
    }
  };

  function handleInputFocus(setFocus){
    if(setFocus){
      setInputFocus(true)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else if (query.length === 0 ) {
      setInputFocus(false)
    }
  }
  return (
      <React.Fragment>
        <h1 className={'home__title' + (inputFocus ? ' search-active' : '')}>Cinematheque</h1>
        <form className={'searchForm' + (inputFocus ? ' search-active' : '') }>
          <div className={'searchBar'}>
            <div className={'searchInput'}>
              <div className={'searchField'}>
                <input id={'searchFormInput'}
                       name={"searchInput"}
                       className={'searchFormInput'}
                       type="text"
                       value={query}
                       autoComplete="off"
                       onFocus={()=>handleInputFocus(true)}
                       onBlur={()=>handleInputFocus(false)}
                       onChange={e=>handleChange(e)}
                       required
                />
                <label htmlFor={'searchFormInput'}>Search for a {searchFilter === 'tv' ? 'tv show' : searchFilter}</label>
              </div>
              <a className={'resetInput'} onClick={handleClearSearch}><span className={'icon-x'}> </span> </a>
            </div>
            <button className={'button button-search'} onClick={handleClick}><span className="icon-search"> </span><span class="button-search-text">Search</span></button>
          </div>
          <MediaTypeFilter options={filterOptions} onChange={handleRadioChange} currentSelection={searchFilter}/>
        </form>

        {query ?
            <section className={'searchResultsContainer'} id={'resultContainer'}>
              <H2 className={'searchTitle'} content={(hasResults) ? "Results for: " + query : "No results found"} />

              {(hasResults) ? <MovieSearchResults searchquery={query} searchFilter={searchFilter}/> : ''}

            </section> : ''}

      </React.Fragment>
  )
}



export default MovieSearch;