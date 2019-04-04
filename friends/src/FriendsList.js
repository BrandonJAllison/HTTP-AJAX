import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


const div ={
    display: 'flex',
    margin: '25px',
    flexDirection: 'column',
    textAlign: 'left',
    border: '1.5px solid #61DAFB',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    
}

const button ={
    width: '100px',
    borderRadius: '15px',
    border: '1px solid #61DAFB',
    background: '#61DAFB',
    margin: '20px 0',
    
}

const link ={
    color: '#61DAFB',
    textDecoration: 'none'
}

class FriendsList extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
   
    render(){
        return(
            <div  >
                {this.props.data.map(friend => (
                    <div  style={div} key={friend.id}>
                        <div><span>Name: {friend.name}</span></div>
                        <div><span>Age: {friend.age}</span></div>
                        <div><span>E-Mail: {friend.email}</span></div>
                        <button style={button} onClick={() => this.props.deleteFriends(friend.id)}>Delete!</button>
                        <NavLink style={link}
                            to ='/UpdateForm'
                            activeClassName="active-link">
                            <span>Update Friend</span>
                        </NavLink>
                    </div>
                ))}
            </div>
        )
    }

}

export default FriendsList;

//id: 1, name: "Ben", age: 30, email: "ben@lambdaschool.com"