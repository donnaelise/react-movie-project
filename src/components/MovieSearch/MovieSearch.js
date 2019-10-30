import React, {useState} from 'react';
import MovieSearchResults from "../MovieSearchResults/MovieSearchResults";
import './MovieSearch.scss';

function MovieSearch (){
  const[query, setQuery] = useState('');
  const[transitionEnded, setTransitionEnded] = useState('true');

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

  return (<React.Fragment>
        <form id={'searchForm'} className={'center'}>
          <div className={'searchInput'}>
            <input id={'searchFormInput'} className={'searchFormInput'} type={'text'} placeholder={'search'} onFocus={onFocus} onChange={e=>handleChange(e)}/>
            <div className={'resetInput'} onClick={handleResetInput}> 𝗫 </div>
          </div>
          <button onClick={handleClick}>Search</button>
          <button onClick={handleClearSearch}>start over</button>
        </form>
        {query && transitionEnded?
            <div className={'searchResultsContainer'}>Search for: {query}
              <MovieSearchResults
                  searchquery={query}
              />
            </div> : ''}
      </React.Fragment>
  )
}

export default MovieSearch;