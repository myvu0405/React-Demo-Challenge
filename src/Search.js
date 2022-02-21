import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleInput = ({target}) => {
        this.setState({
            query:target.value
        })
    }

    render() {
        return (
        <div>
            <input onChange={this.handleInput} type="text" name='query' id='query' placeholder='Search query'/>
            <button onClick={this.props.getVenues.bind(null,this.state.query)}>Search</button>
        </div>
        )
    }
}

export default Search