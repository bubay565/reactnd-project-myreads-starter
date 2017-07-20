import React, { Component } from 'react'
import Books from './Books'

class BookShelves extends Component {
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
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BookShelves