import React, { Component } from 'react';
import FriendsList from './FriendsList'
import AddFriends from './AddFriends'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friendsList: []
    };
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
    .then(response => {
      this.setState(() => ({ friendsList: response.data }));
      console.log(response)
    })
    .catch(error => {
      console.error(error);
    });
};

addFriendsToServer = friend => {

  axios
  .post('http://localhost:5000/friends', friend)
  .then(res => {
    console.log(res.data);
    console.log(friend);
    this.setState({friends: res.data});
  })
  .catch(err => {
    console.log("Error", err)
  })


}


  render() {
    return (
      <div className="App">
        <AddFriends addFriendsToServer={this.addFriendsToServer}/>
        <FriendsList data={this.state.friendsList} />
        
      </div>
    );
  }
}

export default App;
