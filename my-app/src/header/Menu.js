import React from 'react';
import './Menu.css';

export default class Menu extends React.Component{ 


    constructor(props){
        super(props)
        this.state={menu:[]}
    }

    render() {
      return (
        <div>

          <button class="menu-button" onClick={this.homeClickHandler} >HOME</button>
          <button class="menu-button" onClick={this.clickHandler} >PRODUCTS</button>
          <button class="menu-button" onClick={this.clickHandler} >GALLERY</button>
          <button class="menu-button" onClick={this.clickHandler} >CONTACT</button>
        
        </div>
        )
    }

    homeClickHandler=(event)=>{
        event.currentTarget.parentElement.parentElement.childNodes[2].textContent+="123"
        
        // this.setState({name:this.state.name+"1"})
    }

}
