import React, {useState, useEffect} from 'react';
let ResultArr = [];

function MovieSearchComponent(props) {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState('')

  useEffect(()=>{
        fetch(`http://www.omdbapi.com/?s=${props.searchquery}&apikey=79b388a7`)
            .then(response => response.json())
            .then(data=>data.Search)
            .then(result=>setResult(result))
      }, [query]
  );

  function displayData() {
    ResultArr = [];
    if (result) {
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          console.log(result[i].Title);
          ResultArr.push(<li>
            <img src={result[i].Poster} width={'30px'} height={'auto'} alt={'no poster available'} className={'listPoster'}/><div className={'listInfo'}>
            Title: {result[i].Title}
            <br/> Year: {result[i].Year}
          </div>
          </li>)
        }
      }
    }
    ResultArr.map(e=>console.log([e][0]));
    return <ul className={'listResults'}>{ResultArr}</ul>
  }

  return(
      <React.Fragment>
        <button onClick={function (event) {
          event.preventDefault();
          setQuery(props.searchquery)
        }}>
          Find a list
        </button>
        {displayData()}


        <hr/>
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