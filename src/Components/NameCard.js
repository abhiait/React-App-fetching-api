import React, { Component } from "react";
import classes from "./NameCard.module.css";

class NameCard extends Component {
  render() {
let {name, email, address, imageUrl, years, code} = this.props

    return (
      <div className={classes.Component}>
         <div className={classes.Image}>
          <img src={imageUrl} alt="" />
          
        </div>
         <div className={classes.Details}>
           <div className={classes.name}>
             {name.title + " " + name.first+ " " + name.last+ " | " + years}
           </div>
           <div className={classes.email}>
             {email}
           </div>
           <div className={classes.address}>
                {address.street.number+" " + address.street.name} {address.city} {address.state} {address.country} {address.postcode}
           </div>
         </div>
         <div className={classes.code}>
           {code}
         </div> 
      </div>
    );
  }
}
// "location": {
//     "street": { "number": 5863, "name": "Berliner Straße" },
//     "city": "Eislingen/Fils",
//     "state": "Niedersachsen",
//     "country": "Germany",
//     "postcode": 25530,

export default NameCard;
