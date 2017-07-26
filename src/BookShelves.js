import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './Books'

class BookShelves extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    }

    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <Books 
                                books={this.props.books.filter((book) => book.shelf === 'currentlyReading')}
                                updateBookShelf={this.props.updateBookShelf}
                            />                  
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want To Read</h2>
                            <Books 
                                books={this.props.books.filter((book) => book.shelf === 'wantToRead')}
                                updateBookShelf={this.props.updateBookShelf}
                            />    
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <Books 
                                books={this.props.books.filter((book) => book.shelf === 'read')}
                                updateBookShelf={this.props.updateBookShelf}
                            />
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" onClick={this.props.addBookToShelf}>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookShelves