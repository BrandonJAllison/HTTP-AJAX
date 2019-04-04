import React, { Component } from 'react';
import FriendsList from './FriendsList'
import AddFriends from './AddFriends'
import UpdateForm from './UpdateForm'
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friendsList: [],
      
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
  .then(response => {
    console.log(response.data);
    console.log(friend);
    this.setState({friendsList: response.data});
  })
  .catch(err => {
    console.log("Error", err)
  })
}


deleteFriends = id => {
  axios
  .delete(`http://localhost:5000/friends/${id}`)
  .then(response => {
    this.setState({friendsList: response.data})
  })
  .catch(err => {
    console.log("Error", err)
  })
 
}

updateToServer = (info, id) => {
  axios
  .put(`http://localhost:5000/friends/${id}`, info)
    .then(response => {
      this.setState({
        friendsList: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

  render() {
    return (
      <div className="App">
        <AddFriends addFriendsToServer={this.addFriendsToServer} />
        <FriendsList data={this.state.friendsList}  deleteFriends={this.deleteFriends}/>
        <UpdateForm updateToServer={this.updateToServer} friends={this.state.friendsList}/>
       
      </div>
    );
  }
}

export default App;
