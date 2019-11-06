import React, {useState} from 'react';
import MovieSearchResults from "../MovieSearchResults/MovieSearchResults";
import './MovieSearch.scss';
import $ from "jquery";


function MovieSearch (){
  const[query, setQuery] = useState('');
  const[transitionEnded, setTransitionEnded] = useState('true');
  const[searchFilter, setSearchFilter] = useState('movie');

  function handleChange(e){
    setQuery(e.target.value);
    document.body.style.backgroundImage = `none`;
    document.getElementById('searchForm').classList.remove('center');
    document.getElementById('searchForm').classList.add('searchBarToTop');
    // $('#searchForm .searchInput').css("background-color", "black")

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


  $(function() {
    var header = $(".GreyHeader");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
        header.removeClass('GreyHeader').addClass("FireBrickRed ");
        header.addClass("transition");
      } else {
        header.removeClass("FireBrickRed ").addClass('GreyHeader');
        header.addClass("transition");
      }
    });
  });



  return (<React.Fragment>
        <h1 className={'home__title'}>Movie Database</h1>
        <form id={'searchForm'} className={'searchBarToTop'}>
          <div className={'searchBar'}>

            <div className={'searchInput'}>
              <input id={'searchFormInput'} className={'searchFormInput'} type={'text'} placeholder={'search'} onFocus={onFocus} onChange={e=>handleChange(e)}/>
              <div className={'resetInput'} onClick={handleResetInput}> 𝗫 </div>
            </div>
            <button className={'button button-search'} onClick={handleClick}>Search</button>
          </div>
          <button className={'button button-back-home'} onClick={handleClearSearch}>Back</button>
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
            <div className={'searchResultsContainer'}>
              <h3 className={'searchTitle'}>Results for: {query}</h3>
              <MovieSearchResults
                  searchquery={query}
                  searchFilter={searchFilter}
              />
            </div> : ''}
      </React.Fragment>
  )
}

export default MovieSearch;