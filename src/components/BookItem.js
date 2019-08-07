import React from 'react';
import BookPlaceholder from '../images/book-placeholder.jpg';



const BookItem = ({book}) => {
  if (!book) {
    return <div>Loading</div>;
  }

  return (
    <div className="col-12 col-sm-4 col-md-4 col-lg-3">
      <div className="card mb-3">
        <form >
          <img
            src={
              book.volumeInfo.imageLinks === undefined
                ? `${BookPlaceholder}`
                : `${book.volumeInfo.imageLinks.thumbnail}`
            }
            className="card-img-top"
            alt={book.volumeInfo.title}
          />
          <div className="card-body">
            <h5 className="card-title"> {book.volumeInfo.title}</h5>
            <h6 className="small">{book.volumeInfo.authors}</h6>
            <p className="card-text">{book.volumeInfo.description}</p>
            <a
              href={book.volumeInfo.infoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="d-block"
            >
              {' '}See More
            </a>
            <button className="btn btn-info">To Read</button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default BookItem;
