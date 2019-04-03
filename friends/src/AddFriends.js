import React, { Component } from 'react';

class AddFriends extends Component{
    constructor(props){
        super(props);
        this.state = {
            friends: {
                name: "",
                age: "",
                email: ""
            }
        }
    }

    handleChange = event => {
        this.setState({
          friends: {
            ...this.state.friends,
            [event.target.name]: event.target.value
          }
        });
      };

    addFriend = event => {
        event.preventDefault();
        this.props.addFriendsToServer(this.state.friends);
        this.setState({
            friends: {
                name: "",
                age: "",
                email: ""
            }
        });
    }


    render(){
        return(
            <div>
                <form onSubmit={this.addFriend}>
                    <input type="text" name="name" placeholder="name" value={this.state.friends.name} onChange={this.handleChange} />
                    <input type="text" name="age" placeholder="age" value={this.state.friends.age} onChange={this.handleChange}/>
                    <input type="text" name="email" placeholder="email" value={this.state.friends.email} onChange={this.handleChange}/>
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddFriends;