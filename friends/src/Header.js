import React from 'react'
import {NavLink} from 'react-router-dom'


const header = {
    background: 'black',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    zIndex: '2',
    boxShadow: '0px 6px 10px #61DAFB'
    
}
const link ={
    color: '#61DAFB',
    textDecoration: 'none'
    
}


const Header = () => {

return (

    <div style={header}>
        <NavLink style={link}
            to = {'/'}
            activeClassName="active-link">
            <span style={link}>Home</span>
        </NavLink>
        <span style={link}><i style={link} class="fab fa-react fa-spin fa-2x"></i>React Friends</span>
        <NavLink style={link}
            to ='/AddFriends'
            activeClassName="active-link">
            <span style={link}>Add Friends</span>
        </NavLink>

        
    </div>
)


}




export default Header