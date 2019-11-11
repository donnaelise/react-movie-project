import React, {useState, useEffect} from 'react';
import $ from "jquery";
import ListSelectedInfo from "./ListSelectedInfo/ListSelectedInfo";
import ResultDetail from "./ResultDetail";
import './MediaResultCard/MediaResultCard.scss'
import './ResultDetail/ResultDetail.scss'

function MediaResultCard (props) {
  const result = props.result;
  const [selected, setSelected] = useState(false);
  const [poster, setPoster] = useState('');

  useEffect(() => {
        setListPoster();
        window.scrollTo($('#listItem_' + props.currentSelection).position())
      }, [result, selected]
  );

  function handleClick(val){
    setSelected(true);
    handleSelection(val);
    if (selected) {
      setSelected(false)
    } else if (!selected) {
      setSelected(true)
    }
  }

  function setListPoster(){
    if(result.poster_path) {
      setPoster(`http://image.tmdb.org/t/p/w500/${result.poster_path}`)
    }
    else if(result.profile_path) {
      setPoster(`http://image.tmdb.org/t/p/w500/${result.profile_path}`)
    }
  }

  function handleSelection(val){
    if(props.selection){
      props.selection(val.id);
    }
  }

  function ImgError(e){
    e.target.style.display = "none";
  }

  function checkIfNested(){
    if(props.currentSelection === result.id && selected){
      return <ResultDetail nested={props.nested} resultId={result.id} currentSelection={props.currentSelection} mediaType={props.mediaType ? props.mediaType : ''} result={result} poster={poster}/>
    }
    else if(props.nested && selected){
      return <ResultDetail result = {result} poster = {poster}/>
    }
  }

  return(
      <React.Fragment>
        <div className = {`listItem nested--${props.nested}`} id = {'listItem_'+result.id} onClick = {() => handleClick(result)}>
          {(props.currentSelection && props.currentSelection === result.id && selected) || (props.nested && selected) ?
              <div id = {'ResultCardTitle--selected'}>
                <h2>{result.name ? result.name : result.title} <span className="icon-chevron-up"> </span> </h2>
              </div> :
              <div className = {'ResultCard'} >
                <div className = {'imageContainer'}>
                  <img className = {'listPoster'} id={'img_'+result.id} src = {poster ? poster : 'http://via.placeholder.com/500x750/dedede/FFFFFF/?text=No%20Image'} alt = {'No poster available'} onError = {ImgError}/>
                </div>
                <div className = {'listInfo'}>
                  <h3>{result.name ? result.name : result.title}</h3>
                  <ListSelectedInfo selectedInfo = {result} preview = {true}/>
                </div>
              </div>
          }
        </div>
        {checkIfNested()}
      </React.Fragment>
  )
}
export default MediaResultCard;