import React, { Component } from 'react'
let resultTitle

class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        fetch(`http://www.omdbapi.com/?t=${this.state.query}&apikey=79b388a7`)
            .then(response => response.json())
            .then(function(data){
                console.log(data.Title);
                resultTitle=data.Title
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <div>{resultTitle}</div>
            </form>
        )
    }
}

export default Search