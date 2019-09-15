import React, { Component } from "react";
import "./App.scss";

import "./components/viewList";
import ViewList from "./components/viewList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: ["item 1"],
      currentItem: "",
      inputView : false
    };
  }

  addItems = e => {
    const tempList = this.state.toDoItems;

    tempList.push(this.state.currentItem);
    this.setState({
      toDoItems: tempList,
      currentItem : ""
    });

  };

  onIpChange = e => {
    this.setState({
      currentItem: e.target.value
    });
  };  

  onDelete = index =>{
    const tempList = this.state.toDoItems;

   tempList.splice(index , 1);

   this.setState({
     toDoItems : tempList
   })

  }

  viewInput = ()=>{
    this.setState({
      inputView : !this.state.inputView
    })
  }

 inputForm = ()=>(
   <div className="inputForm-wrapper">
<div className="inputForm-content">
<input
          type="text"
          name="items"
          id="items"
          value={this.state.currentItem}
          onChange={this.onIpChange}
          placeholder="enter an item to insert"
        />
         
        <br/>
        <button onClick={this.addItems}>Add</button>
</div>
   </div>
  
  )

  render() {
    console.log(this.state);

    return (
      <div>
        <header
        className="Header"
        >To-Do List</header>

        {this.state.inputView ? (
          this.inputForm()
     
        ) : null}

        <div className="viewItems">
        {this.state.toDoItems.length < 1 ? (
          <p className="viewItems-noItems">
            <img src={require("./images/sleep.png")} alt=""/>
            <br/>
            there are no items avaliable </p>
        ) : (
         <ViewList 
         listData={this.state.toDoItems}
         onDelete={ i => this.onDelete(i) }
         />
        )}
        </div>

        <div 
        onClick={this.viewInput}
        className="addBtn">
          +
        </div>
      </div>
    );
  }
}
