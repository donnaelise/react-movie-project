import React, {useState, useEffect} from 'react';
import MovieData from "./MovieData";
import MovieSearchComponent from "./MovieSearchComponent";

function Form (){

  const[query, setQuery] = useState('');

  useEffect(()=>{

      }
  );
  function handleChange(e){
    setQuery(e.target.value)
  }
  return (<React.Fragment>
        <form>
          <input type={'text'} placeholder={'search'} onChange={e=>handleChange(e)}/>
          <hr/>
          <MovieSearchComponent searchquery={query}/>
        </form>
        <MovieData searchquery={query}/>
      </React.Fragment>
  )
}

export default Form;