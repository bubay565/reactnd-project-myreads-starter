import React from 'react'
import { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import AddBooks from './AddBooks'
import './App.css'

class BooksApp extends Component {
    state = {
        books: [],
        booksOnDisplay: [],
        query: ''
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
    
    queryBookLibrary = (query, max) => {
        this.setState({ query })
        BooksAPI.search(this.state.query.trim(), max).then((booksOnDisplay) => {
            this.setState({ booksOnDisplay })
        }).catch(e => {
            console.log(e)
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
                    <AddBooks 
                        updateBookShelf={this.updateBookShelf}
                        searchLibrary={this.queryBookLibrary}
                        booksOnDisplay={this.state.booksOnDisplay}
                        query={this.state.query}
                    />                             
                )}/>                
            </div>
        )
    }
}
export default BooksApp
