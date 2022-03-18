import React, { Component } from 'react';
import logo512 from "./logo512.png"
import classes from "./Loading.module.css"
class Loading extends Component {
  render() {
    return (
      <div className={classes.loading}> 
          <img className={classes.loadIcon} src={logo512} alt="react logo" />

          <h2>Loading...</h2>
          
      </div>
    );
  }
}

export default Loading;
