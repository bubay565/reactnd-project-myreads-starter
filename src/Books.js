import React, { Component } from 'react'

class Books extends Component {
    
    render(){
        //const uniqueBookIds = new Set(this.props.books.map(b => b.id))
        //const books = [...uniqueBookIds].map(id => this.props.books.find(b => b.id === id))
        const books = this.props.books
        
        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) =>
                        <li key={book.id + book.pageCount}>
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover book-image" style={{backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`}}>
                                    </div>
                                    <div className="book-shelf-changer">
                                        <select defaultValue={book.shelf} onChange={(event) => this.props.updateBookShelf(book, event.target.value)}>
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors && book.authors.map((author, index) => 
                                    <p key={index}>{author}</p>)}
                                </div>
                            </div>   
                        </li> 
                    )}
                </ol>
            </div>
        )
    }
}

export default Books