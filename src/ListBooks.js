import React, { Component } from 'react'

class ListBooks extends Component {
    
    render() {
        console.log('props: ', this.props.books)
        let currentlyReading = this.props.books.filter((book) => book.shelf === 'currentlyReading')
        let wantToRead = this.props.books.filter((book) => book.shelf === 'wantToRead')
        let read = this.props.books.filter((book) => book.shelf === 'read')
        
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentlyReading.map((book) =>
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{backgroundImage: `url(${console.log(book.imageLinks.smallThumbnail)})`}}>
                                        </div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{}</div>
                                </div>   
                            </li> 
                        )}
                    </ol>
                </div>
              </div>

              <div className="bookshelf">
                  <h2 className="bookshelf-title">Want To Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantToRead.map((book) =>
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{backgroundImage: `url(${console.log(book.imageLinks.smallThumbnail)})`}}>
                                        </div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{}</div>
                                </div>   
                            </li> 
                        )}
                    </ol>
                </div>
              </div>

              <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {read.map((book) =>
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{backgroundImage: `url(${console.log(book.imageLinks.smallThumbnail)})`}}>
                                        </div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{}</div>
                                </div>   
                            </li> 
                        )}
                    </ol>
                </div>
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

export default ListBooks