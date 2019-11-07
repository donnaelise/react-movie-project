import React, {useState, useEffect} from 'react';
import MovieSearchResults from "../MovieSearchResults/MovieSearchResults";
import './MovieSearch.scss';
import $ from "jquery";


function MovieSearch (){
  const[query, setQuery] = useState('s');
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

  function handleClearSearch(e){
    e.preventDefault();
    setQuery('');
    document.getElementById('searchForm').reset();
    document.getElementById('searchForm').classList.add('center')
  }

  function handleResetInput(e){
    e.preventDefault();
    setQuery('');
    // resizeNavbar();
    document.getElementById('searchForm').reset();
    document.getElementById('searchFormInput').focus();
  }

  function resizeNavbar(){
    if(query){
      $('.home__title')
          .css("transition","all 1s ease")
          .css("fontSize", "1.5rem",)
          .css("fontWeight", "500");
      $('#searchForm')
          .css("transition","all 1s ease")
          .css("padding","30px 0px 0px 0px");
      $('.searchBarHome')
          .css("paddingTop", "0");
      $('.searchBar')
          .css("marginTop", "0")
          .css("marginBottom", "0");
      $('#filterSearch')
          .css("transform","scale(0.8), 0.5")
      
    } else{
      $('.home__title')
          .css("transition","all 1s ease")
          .css("fontSize", "5rem",)
          .css("fontWeight", "200");
      $('#searchForm')
          .css("padding","30% 0 60% 0")
          .css("transition","padding 1s ease")
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

        <form id={'searchForm'} className={'searchBarToTop searchBarHome'}>
          <div className={'searchBar'}>
            <div className={'searchInput'}>
              <input id={'searchFormInput'} className={'searchFormInput'} type={'text'} placeholder={'search'} onFocus={onFocus} onChange={e=>handleChange(e)}/>
              <div className={'resetInput'} onClick={handleResetInput}> 𝗫 </div>
            </div>
            <button className={'button button-search'} onClick={handleClick}>Search</button>
          </div>
          {/*<button className={'button button-back-home'} onClick={handleClearSearch}>Back</button>*/}
          <div id={'filterSearch'}>
            <label className={'filterLabel'}>
              <input type="radio" name="filterSearch" value="movie" checked={searchFilter === 'movie'} onChange={handleRadioChange}/>
              <span className={'checkmark'}> </span> Movie
            </label>
            <label className={'filterLabel'}>
              <input type="radio" name="filterSearch" value="tv" onChange={handleRadioChange}/>
              TV Shows
              <span className={'checkmark'}> </span>
            </label>
            <label className={'filterLabel'}>
              <input type="radio" name="filterSearch" value="person" onChange={handleRadioChange}/>
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