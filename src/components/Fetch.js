import React, {useState} from 'react';

let request;

function Fetch(props) {

  const [result, setResult] = useState([]);
  request='';

  for(let i = 0; i < props.requests.length; i++){
    request += `&${props.requests[i].key}=${props.requests[i].value}`;
    console.log(request)
  }

  fetch(`${props.url}${request}`)
      .then(response => response.json())
      .then(data=>setResult(data));

  return(
      <React.Fragment>
      {console.log(result)}
      </React.Fragment>
  )
}

export default Fetch;