import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import './App.css'

class BooksApp extends React.Component {
    state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
        showSearchPage: false,
        books: []
    }
    
    componentDidMount() {
        BooksAPI.getAll().then((books) => 
            this.setState({ books })
    )}
    
    updateBookShelf = (book, shelf) => {
        /*this.setState((state) => ({
            books: state.books.filter((b) => b.id !== book.id)
        }))*/
        BooksAPI.update(book, shelf).then(result =>{
            BooksAPI.getAll().then((books) => 
                this.setState({ books })
            )
        })
    }

    render() {
        return (
            <div className="app">
                <BookShelves
                    updateBookShelf={this.updateBookShelf}
                    books={this.state.books}
                />
            </div>
        )
    }
}
export default BooksApp
