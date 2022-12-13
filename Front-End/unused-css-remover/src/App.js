import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';

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
          
          <Form/>
        </div>
      </div>
    );
  }
}
 
export default App;
