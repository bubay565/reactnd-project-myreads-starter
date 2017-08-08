import React, { Component } from 'react'
import Books from './Books'
import PropTypes from 'prop-types'

class Shelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    }

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <Books 
                    books={this.props.books}
                    updateBookShelf={this.props.updateBookShelf}
                />                  
            </div>
        )
    }
}

export default Shelf