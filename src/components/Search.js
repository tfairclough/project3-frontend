import { getSearchedUsers } from './users/api'
import React from 'react';

class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            name: '', 
            friends: [],
            newUserValue: ''
          }

    }
   // takes input and matches it to api users
   // backend is where we filter input to match db
    handleSearchChange = (e) => {
        const userDetails = 
         this.state.name
    
        console.log(this.state.name)
        getSearchedUsers(userDetails)
        .then((response) => {
        console.log(response)
        })
        .catch((error) => {
            console.error(error);
        });
        //allow user to input text
         /*    this.setState({
            searchValue: e.target.value
        }) */
    
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
                <input type = 'text'
                        placeholder = "Search for friends"
                        value = {this.value}
                        onChange = {(e) => {
                            this.setState({name: e.target.value})
                            this.handleSearchChange()
                        } } />
               {/*  <button type='submit' onSubmit={this.handleFriendsSubmit}>Add to Friends List</button>  */}
            </div>
        )
        }
    }
    
    export default Search;

