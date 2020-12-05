import React from 'react';
import Menu from "./Menu"
import './Header.css';

export default class Header extends React.Component{ 
    
    constructor(props){
        super(props)
        this.state={name:"poom"}
    }
    render() {
      return (
        <div className="Header">
          <Menu />
          <button onClick={this.clickHandler} >CLICK ME!</button>
      <h1 textContent={this.state.name}>{this.props.textContent}</h1>
        </div>
        )
    }

    clickHandler=()=>{
        //console.log(event.currentTarget)
        this.setState({name:this.state.name+"1"})
    }

}
