import React from 'react';
import MovieData from "./MovieData";
let result;

class Form extends React.Component{
    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            isLoading: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        // console.log('from render function: ', this.state.result)
        return(
            <form>
                <input type={'text'} placeholder={'search'} onChange={this.handleChange}/>
               <MovieData query={this.state.query}/>
            </form>
        )
    }

    handleChange(event){
        this.setState({query: event.target.value},
            function(){
                // console.log('loading....');
                // console.log("typed: ", this.state.query);
                fetch(`http://www.omdbapi.com/?t=${this.state.query}&apikey=79b388a7`)
                    .then(response => response.json())
                    .then(function(data){
                        result=data;
                        console.log(result);
                    })
                    .then(console.log('done loading'))
                    .then(()=> <p>testttttt</p>)
                    .then(this.setState({result:result}))
            }, function(){ console.log('done loading')})
    }

    getResult(val){
        if(val){
            return <MovieData searchQuery={val} />}
    }


}

export default Form;