import React from 'react'
import { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import AddBooks from './AddBooks'
import './App.css'

class BooksApp extends Component {
    state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
        books: []
    }
    
    componentDidMount() {
        BooksAPI.getAll().then((books) => 
            this.setState({ books })
    )}
    
    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(result =>{
            BooksAPI.getAll().then((books) => 
                this.setState({ books })
            )
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <BookShelves
                        updateBookShelf={this.updateBookShelf}
                        books={this.state.books}
                    />
                )}/>
                
                <Route path="/search" render={() => (
                    <AddBooks updateBookShelf={this.updateBookShelf}
                    />                             
                )}/>                
            </div>
        )
    }
}
export default BooksApp
