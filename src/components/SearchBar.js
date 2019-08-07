import React from 'react';

class SearchBar extends React.Component{

    state = {
        term : ''
    }
    

    onTermSubmit =(event) =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({term : event.target.value });
  };


    render(){
        return( 
            <form onSubmit={this.onTermSubmit}>
                 <div className="form-group">
                
                     <input className="form-control" type="text" 
                       value={this.state.term}
                       onChange = {this.onInputChange}
                       placeholder = "Enter Book Title or Author" 
                       />
                 </div>
            </form>
        );
    }
}

export default SearchBar;