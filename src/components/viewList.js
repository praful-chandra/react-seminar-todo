import React, { Component } from 'react'

export default class ViewList extends Component {
    render() {
        return (
            <ul className="viewList-wrapper">
                {this.props.listData.map((e,i)=>{
      return(
        <li key={i}> {e}  <div onClick={()=>this.props.onDelete(i)}  >delete</div> </li>  
      );
    })}
            </ul>
        )
    }
}
