import React from 'react';


class Form extends React.Component{
    static defaultProps = {

    };
    render(){
        return(
          <form>
              <input type={'text'} placeholder={'search'} />
          </form>
        )
    }
}


export default Form;