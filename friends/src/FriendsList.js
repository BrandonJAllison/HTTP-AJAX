import React from 'react';

const FriendsList = props => (
    
    <div className='friendsList'>
        {props.data.map(friend => (
            <div key={friend.id}>
                <p><span>Name:</span>{friend.name}</p>
                <p><span>Age:</span>{friend.age}</p>
                <p><span>Email:</span>{friend.email}</p>
            </div>
        ))}
    </div>
);

export default FriendsList;

//id: 1, name: "Ben", age: 30, email: "ben@lambdaschool.com"