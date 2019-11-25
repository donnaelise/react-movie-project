import React from 'react';
import './ListSelectedInfo.scss'

function ListSelectedInfo (props) {
  const obj = props.selectedInfo;

  function transformText(str){
    str = str.replace(/_/g, ' ');
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str
  }

  function transformGenderText(prop) {
    if (prop === 'gender') {
      if (obj['gender'] === 1) {
        obj['gender'] = "Female";
      } else if (obj['gender'] === 2) {
        obj['gender'] = "Male";
      }
    }
  }
  const exclude = ['name', 'title', 'id', 'overview'];

  return(
      <React.Fragment>
        <dl className={'ListSelectedDescription'}>
          {Object.keys(obj).map(function (prop) {
            if (typeof(prop) === 'string' && !prop.includes('path') && prop !== 'known_for') {
              transformGenderText(prop);
              if(props.preview){
                if(!exclude.includes(prop) && obj[prop]){
                  return obj[prop].length > 60 ? ' ' :
                      <React.Fragment key={obj[prop]}>
                          <dt>{transformText(prop)}</dt>
                          <dd>{obj[prop]}</dd>
                      </React.Fragment>
                }
              }
              else if(!props.preview){
                return <React.Fragment>
                    <dt>{transformText(prop)}</dt>
                    <dd>{obj[prop]}</dd>
                </React.Fragment>
              }
            }
          })
          }
        </dl>

      </React.Fragment>
  )
}
export default ListSelectedInfo;