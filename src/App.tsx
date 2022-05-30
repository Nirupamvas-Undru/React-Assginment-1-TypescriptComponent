import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

const App: React.FC = () =>{
  return <div className="App">
    <Navbar/>
    <Textform heading='Input the text'/>
  </div>
}

export default App;
