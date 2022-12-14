import Background from "./components/Background";
import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
      
      <div className='main'>
        <NavBar/>
        
        <div className='container mt-5 mb-5'>
          <h1 className='display-6 mb-5 '>Easily Clean Up Your Unused CSS Rules</h1>
          <h5>Usage:</h5>
          <Background/>
          <ul>
            <li className='m-2'>Copy&paste your HTML and CSS into boxes below</li>
            <li className='m-2'>Click Remove css button</li>
            <li className='m-2'>Use your optimized css</li>
          </ul>
          
          <Form/>
        </div>
      </div>
      </>
    );
  }
}
 
export default App;
