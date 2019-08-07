import React from 'react';
import BookItem from './BookItem';

const BookList = ({books }) => {
    const bookList = books.map((book) => {
        return <BookItem book={book} key = {book.volumeInfo.title}/>
    });

  return(
      <div className="col-12">
          <div className="row">
         {bookList}
         </div>
      </div>
  )
};


export default BookList;