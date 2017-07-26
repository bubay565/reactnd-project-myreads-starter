import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
import * as BooksAPI from './BooksAPI'
//import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class AddBooks extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim() })
    }
    
    render(){    
        let booksOnDisplay = []
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            booksOnDisplay = BooksAPI.search(this.state.query, 20).then(result => {
                result.filter((book) => match.test(book.title)).sort(sortBy('title'))
            })
        }
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Books 
                            books={booksOnDisplay}
                            updateBookShelf={this.props.updateBookShelf}
                        />    
                    </ol>
                </div>
            </div>
        )
    }
}

export default AddBooks