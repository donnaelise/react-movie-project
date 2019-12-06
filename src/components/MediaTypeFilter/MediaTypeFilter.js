import React from 'react';

function MediaTypeFilter (props) {
  const options = props.options;

  return(
        <div id={'filterSearch'}>
          {options.map(function(option){
            return <label className={'filterLabel'} key={option.value}>
              <input type="radio" name="filterSearch" value={option.value} checked={props.currentSelection === option.value} onChange={props.onChange}/>
              <span className={'checkmark'}> </span> {option.label}
            </label>
          })}
        </div>
  )
}
export default MediaTypeFilter;