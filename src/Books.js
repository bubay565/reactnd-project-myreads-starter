import React, { Component } from 'react'

class Books extends Component {
    
    render(){
        let books = this.props.books
        
        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) =>
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                <div className="book-cover book-image" style={{backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}>
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
                                <div className="book-authors">{book.authors.map((author, index) => 
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