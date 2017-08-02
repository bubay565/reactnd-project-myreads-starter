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
    
    getUniqueBooks = (booksOnDisplay) => {
        const uniqueBookIds = new Set(booksOnDisplay.map(b => b.id))
        return [...uniqueBookIds].map(id => booksOnDisplay.find(b => b.id === id))
    }
    
    updateSearchShelf = (uniqueBooks) => {
        uniqueBooks.forEach(uBook => {
            this.state.books.forEach(sBook => {
                if(uBook.id === sBook.id){
                    uBook.shelf = sBook.shelf
                }
            })
        })
        return uniqueBooks
    }
    
    queryBookLibrary = (query, max) => {
        this.setState({ query })
        BooksAPI.search(this.state.query.trim(), max).then((booksOnDisplay) => {
            if(!booksOnDisplay || booksOnDisplay.error || booksOnDisplay.length === 0){
                this.setState({ booksOnDisplay: []})
                return
            }
            const uniqueBooks = this.getUniqueBooks(booksOnDisplay) 
            this.setState({ booksOnDisplay: this.updateSearchShelf(uniqueBooks) })
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
