import React from 'react';
import firebsase from '../firebase.js';
import SearchBar from './SearchBar';
import googlebooks from '../apis/googlebooks';
import BookItem from './BookItem';
import BookList from './BookList';
import hero from '../images/books-reading-library.jpg';

class App extends React.Component {
    state = {
        books: [],
        bookStatus: []
    }

    componentDidMount(){
      const bookRef = firebsase.database().ref('books');
    }

    onTermSubmit = async term => {
        const response = await googlebooks.get ('/volumes', {
          params: {
            q: term
          },
        });
    
        this.setState ({
          books: response.data.items
        });
    
    
      };

  render () {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Find your favorites books</h1>
            <p className="lead">
            {/* <img src={hero} alt="hero" className="img-fluid" /> */}

            </p>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-12">
           
              <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
          </div>
          <div className="row">

              <BookList books={this.state.books}/>
             
          </div>
        </div>
      </div>
    );
  }
}
export default App;
