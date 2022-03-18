import React, { Component } from "react";
import NameCard from "./NameCard";
import classes from "./Card.module.css"
import Loading from "./Loading";
import Error from "./Error";


class Card extends Component {
  constructor(){
    super();    
    this.state = {
      results : [],
      allData: [],
      loading: false,
      error: false
       
    }

}

async componentDidMount(){
  let url = "https://randomuser.me/api/?results=15" ;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  
  this.setState({results : parsedData.results,     
    allData : parsedData.results,
    loading: false,
    error: false
  })
}
componentDidUpdate(prevProps){
  // console.log(this.props.search)
 if(prevProps.search!=this.props.search){
   
   const data = [...this.state.allData];
   const filterData = data.filter(item=>{
    return (`${item.name.title} ${item.name.first} ${item.name.last} | ${item.dob.age} ${item.email} ${item.location.street.number} ${item.location.street.name} ${item.location.city} ${item.location.state} ${item.location.country} ${item.location.postcode} `).toLowerCase().includes(this.props.search);
   })
   this.setState({results:filterData});
   if(filterData.length == 0){
    this.setState({error:true});
   }else{
    this.setState({error:false});
   }
 }
 

}

  render() {console.log(this.state.results)
    return (
      <>
      {this.state.loading && <Loading/>}
      {this.state.error && <Error/>}

        <div className={classes.container}>
         { !this.state.loading &&this.state.results.map((element)=>{
           return <div className={classes.elements} key={element.email}>
 <NameCard imageUrl={element.picture.medium} name={element.name} email={element.email}
 address={element.location} code={element.nat} years={element.dob.age}/>
           </div>
         })}
        </div>
        </>
      
    );
  }
}

export default Card;
