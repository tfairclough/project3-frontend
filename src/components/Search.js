import { getSearchedUsers } from './users/api'
import React from 'react';

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '', 
            friends: [],
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
        })
        .catch((error) => {
            console.error(error);
        });
        this.setState({
            searchValue: textValue
        })
  }

   /* handleFriendsSubmit = (e) => {
        this.setState({
            friends: [...this.state.friends, user]
        })
  }; */

render() {
        return (
            <div>
                <label>Search for friends</label>
                <input type = 'search'
                        placeholder = "Search for friends"
                        value = {this.state.searchValue}
                        onChange = {this.handleSearchChange}
                        
                         />
               {/*  <button type='submit' onSubmit={this.handleFriendsSubmit}>Add to Friends List</button>  */}
            </div>
        )
        }
    }
    
    export default Search;

