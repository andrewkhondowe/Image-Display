import React, { Component } from 'react';







export class SubComponent extends Component{
  render(){
    return(
      <div className="cool">

       <h1>{this.props.message}</h1>



      </div>

    );
  }


}
