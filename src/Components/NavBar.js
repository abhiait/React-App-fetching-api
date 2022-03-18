import React, { Component } from 'react';
import logo192 from './logo192.png'
import classes from './NavBar.module.css'

class NavBar extends Component {
  render() {
    return (
      <div className={classes.Navbar}>
        <img className={classes.logo} src={logo192} alt=""/>
        <input className={classes.search} onChange={(e)=>this.props.setsearch(e.target.value.toLowerCase())} type="text" placeholder="search users.." name="search"/>
        
        
         </div>
    );
  }
}

export default NavBar;
