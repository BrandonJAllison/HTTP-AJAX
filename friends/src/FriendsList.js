import React, { Component } from 'react';

class FriendsList extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    
    render(){
        return(
            <div>
                {this.props.data.map(friend => (
                    <div key={friend.id}>
                        <div><span>{friend.name}</span></div>
                        <div><span>{friend.age}</span></div>
                        <div><span>{friend.email}</span></div>
                        <button onClick={() => this.props.deleteFriends(friend.id)}>Delete</button>
                    </div>
                ))}
            </div>
        )
    }

}

export default FriendsList;

//id: 1, name: "Ben", age: 30, email: "ben@lambdaschool.com"