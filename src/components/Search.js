
import React from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            allUsers: [], 
            filteredUsers: [],
            friends: [],
            newUserValue: ''
          }
    }

    render() {
//takes input and matches it to api users
handleSearchChange = (e) => {
    const textValue = e.target.value;
    const filteredUsersList = this.state.friends.filter(function(person){
      return person.name.toLowerCase().includes(textValue.toLowerCase())
    })
  //allow user to input text
    this.setState({
      searchValue: textValue,
      filteredUsers: filteredUsersList 
    })
  }

        return (
            <div>
                <label>Search for friends</label>
                <input type = 'text'
                        placeholder = "Search for friends"
                        /* value = {props.value}
                        onChange = {props.onChange} *//>
            </div>
        )
  
    }
    }
    
    export default Search;
