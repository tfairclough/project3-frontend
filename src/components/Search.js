import { getSearchedUsers } from './users/api'
import React from 'react';
import Results from './Results'

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '', 
            searchResults:[]
          }
    }
   // takes input and matches it to api users
   // backend is where we filter input to match db
    handleSearchChange = (e) => {
        const textValue = e.target.value
        console.log(textValue)
        getSearchedUsers(textValue)
        .then((response) => {
        console.log(response)
        this.setState({
            searchResults: response.data.users
        })
        })
        .catch((error) => {
            console.error(error);
        });
        this.setState({
            searchValue: textValue 
        })
  }

   addToFriends = (user) => {
        
  }; 

render() {
        return (
            <div>
                <label>Search for friends</label>
                <input type = 'search'
                        placeholder = "Search for friends"
                        value = {this.state.searchValue}
                        onChange = {this.handleSearchChange}
                         />
                <Results searchResults={this.state.searchResults}
                         addToFriends={this.addToFriends}/>
               {/*  <button type='submit' onSubmit={this.handleFriendsSubmit}>Add to Friends List</button>  */}
            </div>
        )
        }
    }
    
    export default Search;

