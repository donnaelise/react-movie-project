import React, {useState, useEffect} from 'react';
import MovieData from "./MovieData";

function Form (){

    const[query, setQuery] = useState('')

    useEffect(()=>{
        console.log('query', query)

    })
    function handleChange(e){
        console.log(e.target.value)
        setQuery(e.target.value)
    }
    return (
        <form>
            <input type={'text'} placeholder={'search'} onChange={e=>handleChange(e)}/>
            <MovieData searchquery={query}/>
        </form>
    )


}

export default Form;