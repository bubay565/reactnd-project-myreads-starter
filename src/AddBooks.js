import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class AddBooks extends Component {
    static propTypes = {
        booksOnDisplay: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired,
        searchLibrary:PropTypes.func,
        query: PropTypes.string.isRequired
    }

    render(){ 
        console.log('Props: ', this.props)
        let booksOnDisplay = this.props.booksOnDisplay
        if(booksOnDisplay.length > 0){
            booksOnDisplay.sort(sortBy('title'))
        }
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.props.query}
                            onChange={(event) => this.props.searchLibrary(event.target.value, 20)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <Books 
                        books={booksOnDisplay}
                        updateBookShelf={this.props.updateBookShelf}
                    />    
                </div>
            </div>
        )
    }
}

export default AddBooks