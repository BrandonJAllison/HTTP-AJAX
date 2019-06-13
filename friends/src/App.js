import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import FriendsList from './FriendsList'
import AddFriends from './AddFriends'
import UpdateForm from './UpdateForm'
import Header from './Header'
import axios from 'axios';
import './App.css';

const div = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  textAlign: 'center',
  height: 'auto',
  color: 'white',
  
}

const bkg ={
  background: '#515457',
}
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
    console.log("You done messed up A-aron!", err)
  })
}


deleteFriends = id => {
  axios
  .delete(`http://localhost:5000/friends/${id}`)
  .then(response => {
    this.setState({friendsList: response.data})
  })
  .catch(err => {
    console.log("You done messed up A-aron!", err)
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
      console.log('You done messed up A-aron!', err);
    });
};

  render() {
    return (
      <div style={bkg} >
        <Header />
        <div style={div}>
        <Route path="/AddFriends" render={ (props) => {
          return(<AddFriends {...props} addFriendsToServer={this.addFriendsToServer} />)
        }} />
         <Route exact path="/" render={ (props) => {
          return(<FriendsList {...props} data={this.state.friendsList}  deleteFriends={this.deleteFriends}/>)
        }} />
        <Route path="/UpdateForm" render={ (props) => {
          return(<UpdateForm {...props} updateToServer={this.updateToServer} friends={this.state.friendsList}/>)
        }} />
        
        </div>
      </div>
    );
  }
}

export default App;
