import React from 'react';

export default class Menu extends React.Component{ 


    constructor(props){
        super(props)
        this.state={menu:[]}
    }

    render() {
      return (
        <div>
          <button onClick={this.homeClickHandler} >HOME</button>
          <button onClick={this.clickHandler} >PRODUCTS</button>
          <button onClick={this.clickHandler} >GALLERY</button>
          <button onClick={this.clickHandler} >CONTACT</button>
        </div>
        )
    }

    homeClickHandler=(event)=>{
        event.currentTarget.parentElement.parentElement.childNodes[2].innerText="123"
        
        // this.setState({name:this.state.name+"1"})
    }

}
