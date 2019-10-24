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
  // console.log('loaded');

  function handleSelection(val){
    setSelection(val)

  }

  function handleClearSearch(e){
    e.preventDefault();
    setMovieSearch('');
    setSelection('')
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
              <MovieSearchComponent searchquery={movieSearch} selection={handleSelection}/>
            </div> : ''}
      </React.Fragment>
  )
}

export default Form;