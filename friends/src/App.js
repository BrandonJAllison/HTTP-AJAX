import React, { Component } from 'react';
import FriendsList from './FriendsList'
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
    
  

  render() {
    return (
      <div className="App">
        <FriendsList data={this.state.friendsList} />
      </div>
    );
  }
}

export default App;
