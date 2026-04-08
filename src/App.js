import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// v:16:- copying from react router dom
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";


function App() {

  const[mode, setMode] = useState('light');//Whether darkmode is enable or not
  const[alert,setAlert] = useState(null);//for Alert message

  //for Alert:-
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    // adding this the alert will be disappear after 1.5 sec
    setTimeout(()=>{
      setAlert(null);
    },1500)

  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#180433';// enable dark mode enable korle background color gray hobe
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';// enable dark mode enable korle background color white hobe
      showAlert("Light mode has been enabled","success")

    }
    }


  return (
    <>
    <Router>
    {/*  prop type korle eta command out korbo*/}
  <Navbar title = "TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>

  <Alert alert={alert}/> {/*Adding this for Alert.js file */}

{/*default props dile sudhu eta command out korte hoi
  <Navbar/>
*/}

  {/*<navbar title ="TextUtils"/>*/}

  <div className="container my-3">
  <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/> }/>
           {/*<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/> {/*here adding showAlert={showAlert} for showing alert in textbox*/} 
  </Routes>      
  {/*<About/> {/*Adding this for Alert.js file */}
  </div>
  </Router>
   </>
  );
}

export default App;
