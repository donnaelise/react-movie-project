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
    return (
        <form>
            <input type={'text'} placeholder={'search'} onChange={e=>handleChange(e)}/>
            <hr/>
          <MovieData searchquery={query}/>
          <MovieSearchComponent searchquery={query}/>
        </form>
    )
}

export default Form;