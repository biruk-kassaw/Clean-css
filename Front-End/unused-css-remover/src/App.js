import React, { Component } from 'react';
import './App.css';
import TextArea from './components/TextArea';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='main'>
        <TextArea/>
      </div>
    );
  }
}
 
export default App;
