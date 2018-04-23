import React, { Component } from 'react';
import './App.css';
import {HelloComponent} from './HelloComponent';
import {SubComponent} from './SubComponenet';
import {SlideComponent} from './SlideComp';
// import ButtonComponent from './ButtonComponent';
// import ImageComponent from './ImageComponent';



class App extends Component {
  render() {
    return (
      <div className="App">
        <SlideComponent />
       {/* <ImageComponent /> */}
        <SubComponent message="The view of all sides" />
        {/* <ButtonComponent /> */}


      </div>
    );
  }
}

export default App;
