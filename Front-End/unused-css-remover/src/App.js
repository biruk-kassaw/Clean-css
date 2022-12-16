import Background from "./components/background/Background";
import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowRight} shake className='list-icons'/>

class App extends Component {
  state = {  } 
  render() { 
    return (
      <>
      <Background/>
      <div className='main'>
        <NavBar/>
        
        <div className='container mb-5 main-container'>
          <h1 className='display-6 mb-5 main-header'>Easily Clean Up Your Unused CSS Rules</h1>
          <div className="mb-5">
              <h5 className="lead mb-3"><b>Usage:</b></h5>
              
              <ul className="main-list">
                <li className='m-2 lead'> {element} <span className='ms-2'> Copy&paste your HTML and CSS into boxes below</span></li>
                <li className='m-2 lead'> {element} <span className='ms-2'>Click Remove css button</span></li>
                <li className='m-2 lead'> {element} <span className='ms-2'>Use your optimized css</span></li>
              </ul>
          </div>
          
          
          <Form/>
        </div>
      </div>
      
      </>
    );
  }
}
 
export default App;
