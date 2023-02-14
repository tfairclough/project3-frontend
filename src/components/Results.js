import React, { Component } from 'react';

class Results extends Component{
   onClick = (e) => {
    const user = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        userName: this.props.userName
    }
    this.props.addToFriends(user)
   }

    render () {
        return (
            //map here
           <div>
             <div>
                <h3>First name: {this.props.firstName}</h3>
                <h3>Last name: {this.props.lastName}</h3>
                <h3>Username: {this.props.userName}</h3>
            </div>
            <div>
                <button onClick={this.onClick}>Add to friends</button>
            </div>
           </div>
        )
    }
}

export default Results;