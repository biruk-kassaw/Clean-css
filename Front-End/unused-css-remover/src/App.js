import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='main'>
        <NavBar/>
        
        <div className='container mb-5'>
          <h1 className='display-4 mb-5'>Simply Remove Unused Part Of Your Css Online</h1>
          <h5>Usage:</h5>
          <ul>
            <li className='m-2'>Copy&paste your HTML and CSS into boxes below</li>
            <li className='m-2'>Click Remove css button</li>
            <li className='m-2'>Use your optimized css</li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <TextArea label="Insert Your HTML Here"/>
            </div>
            <div className="col">
              <TextArea label="Insert Your Css Here"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
