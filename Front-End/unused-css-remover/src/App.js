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
      {/* <Background/> */}
      <div className='main'>
        <NavBar/>
        
        <div className='container mb-5 main-container'>
          <h1 className='display-6 mb-5 main-header'>Easily Clean Up Your Unused CSS Rules</h1>
          <h5 className="lead"><b>Usage:</b></h5>
          
          <ul>
            <li className='m-2 lead'>Copy&paste your HTML and CSS into boxes below</li>
            <li className='m-2 lead'>Click Remove css button</li>
            <li className='m-2 lead'>Use your optimized css</li>
          </ul>
          
          <Form/>
        </div>
      </div>
      
      </>
    );
  }
}
 
export default App;
