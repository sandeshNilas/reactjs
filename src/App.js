//import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {useState} from 'react'
import Alert from './component/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  
  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      document.title ='Textutils dark mode';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
      document.title ='Textutils light mode '

    }
  }
  return (
    <>
    
    
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'>
        {/* <Routes> */}
          <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm mode={mode} showAlert={showAlert} toggleMode={toggleMode}/> 
          </Route>
          </Switch>
          {/* </Routes> */}
    </div>
    </Router> 
    {/* <div className='container my-3'>
      <TextForm heading="Enter the text to analyze below"/>
    </div> */}
       

    </>
  );
  
}

export default App;
