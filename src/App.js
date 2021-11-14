import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
   const showAlert = (message, type) =>{
     setAlert({
       msg:message,
       type: type
     })
     setTimeout(()=> {
       setAlert(null);
     },2000 )
   }
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode( 'dark');
      document.body.style.backgroundColor = '#082036';
      showAlert("Dark mode Enabled" , "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is an amazing tool"
      // },2000);
      // setInterval(() => {
      //   document.title = "TextUtils is install"
      // },1500);
    }
    else{
       setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("light mode Enabled" , "success")
       document.title = "TextUtils-Light Mode"
    }
  }
  return (
    <>
    {/* <Router>
  <Navbar title= "Textutils" mode ={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />
  <div className="container my-3">
  <Routes>
          <Route exact path="/about" element={<About />}/>  
          <Route exact path="/"
          element={<TextForm showAlert={showAlert} heading ="Enter our Text here" mode={mode}/>} />
  </Routes>
  </div>
  </Router> */}
  <Navbar title= "Textutils" mode ={mode} toggleMode={toggleMode}/>
  <Alert alert={alert} />
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading ="Enter our Text here" mode={mode} />
  </div>
    </>
  );
}

export default App;
