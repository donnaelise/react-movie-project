import React, {useState, useEffect} from 'react';
import './components/MediaResultCard/MediaResultCard.scss';
import $ from "jquery";
import ListSelectedInfo from "../ListSelectedInfo/ListSelectedInfo";
import ResultDetail from "../ResultDetail";

function ResultCard (props) {
  const result=props.result;
  const [selected, setSelected] = useState(false);
  const [poster, setPoster] = useState('');
  // const [position, setPosition] = useState('');


  useEffect(()=>{
        setListPoster();
        window.scrollTo($('#listItem_'+props.currentSelection).position())
      }, [result, selected]
  );

  function handleClick(val){
    console.log('clicked');
    handleSelection(val);

    if(selected) {
      setSelected(false)
    } else if (!selected) {
      setSelected(true)
    }
  }

  const selectedStyle = {
    backgroundImage: 'url(' + poster + ')',
    backgroundPositionY: '-40px',
    height:'160px',
    marginLeft:'0px',
    maxWidth:'100%',
    backgroundSize:'cover'
  };

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
    e.target.style.display="none";
  }

  function onLoad(){
    // setPosition($('#listItem_'+result.id).position().top);
  }

  function checkIfNested(){
    if(props.nested === false) {
      if(props.currentSelection === result.id && selected){
        return <ResultDetail nested={props.nested} resultId={result.id} currentSelection={props.currentSelection} mediaType={props.mediaType ? props.mediaType : ''} result={result}/>
      }
    }
  }

  return(
      <React.Fragment>
        <hr/><p>JPHIDOBSJKNKQEJFLKD</p>
        <div className={'listItem'} id={'listItem_'+result.id} onClick={() => handleClick(result)}>
          {props.currentSelection && props.currentSelection === result.id && selected ?
              <div id={'ResultCardTitle--selected'} style={selectedStyle}> </div> :
              <div className={'ResultCard'}>
                <div className={'imageContainer'}>
                  <img className={'listPoster'} id={'img_'+result.id} src={poster ? poster : 'http://via.placeholder.com/500x750/dedede/FFFFFF/?text=No%20Image'} onLoad={onLoad}  alt={'No poster available'} onError={ImgError}/>
                </div>
                <div className={'listInfo'}>
                  <h3>{result.name ? result.name : result.title}</h3>
                  <ListSelectedInfo selectedInfo={result} preview={true}/>
                </div>
              </div>
          }
        </div>
        {checkIfNested()}
      </React.Fragment>
  )
}
export default ResultCard;