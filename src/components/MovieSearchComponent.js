import React, {useState, useEffect} from 'react';
let ResultArr = [];

function MovieSearchComponent(props) {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState('props.searchquery');

  useEffect(()=>{
        props.selection('');
        fetch(`http://www.omdbapi.com/?s=${props.searchquery}&apikey=79b388a7`)
            .then(response => response.json())
            .then(data=>data.Search)
            .then(result=>setResult(result))
      }, [query, props.searchquery]
  );

  function displayData() {
    ResultArr = [];
    if (result) {
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          ResultArr.push(result[i]);
        }
      }
    }
  }

  function handleClick(val){
    props.selection(val.imdbID)
  }

  return(
      <React.Fragment>
        {displayData()}
        <hr/>
        <ul className={'listResults'}>
          {ResultArr.map(result=>
              <li key={result.imdbID} className={'listItem'} id={'listItem_'+result.imdbID} onClick={() => handleClick(result)}>
                <img className={'listPoster'} src={result.Poster} alt={'no poster available'}/>
                <div className={'listInfo'}>
                  Title: {result.Title} <br/>
                  Year: {result.Year}
                </div>
              </li>)}
        </ul>
      </React.Fragment>
  )
}
export default MovieSearchComponent;




















// import React, {useState, useEffect} from 'react';
//
// function MovieSearchComponent(props) {
//   const [result, setResult] = useState([]);
//   const [query, setQuery] = useState('harry')
//   const [num,setNum] = useState(1)
//   console.log(result[0]);
//
//   useEffect(()=>{
//         fetch(`http://www.omdbapi.com/?s=${query}&apikey=79b388a7`)
//             .then(response => response.json())
//             .then(data=>console.log(data.Search))
//
//       }, [query, num]
//   );
//
//   function handleChange(){
//     setNum(1);
//   }
//   return(
//       <React.Fragment>
//         <p>{num}</p>
//         {result ? <p>{result}</p> : <p>no result available</p>}
//         <p>{query}</p>
//       </React.Fragment>
//   )
// }
// export default MovieSearchComponent;