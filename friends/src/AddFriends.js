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
                    <input type="text" name="name" required='required' placeholder="name" value={this.state.friends.name} onChange={this.handleChange} />
                    <input type="text" name="age" required='required' placeholder="age" value={this.state.friends.age} onChange={this.handleChange}/>
                    <input type="text" name="email" placeholder="email" required='required' value={this.state.friends.email} onChange={this.handleChange}/>
                    <button type="submit" value="Submit" >Button</button>
                </form>
            </div>
        )
    }
}

export default AddFriends;