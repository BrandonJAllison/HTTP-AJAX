import React from 'react'
import {NavLink} from 'react-router-dom'


const header = {
    background: 'black',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white'
    
}
const link ={
    color: 'white',
    textDecoration: 'none'
}


const Header = () => {

return (

    <div style={header}>
        <NavLink 
            to = {'/'}
            activeClassName="active-link">
            <span style={link} >Home</span>
        </NavLink>

        <NavLink 
            to ='/AddFriends'
            activeClassName="active-link">
            <span style={link}>Add Friends</span>
        </NavLink>

        
    </div>
)


}




export default Header