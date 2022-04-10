import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState("light"); //theme dark/light mode

  const [alert, setAlert] = useState(null); //Alert message

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  //Toggle modes
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode" ;
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode" ;
    }
  }

  return (
    <>
      {/* Navbar */}
      <Navbar title="CLoud Kitchen" explore="Explore" order="Order Now" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      {/* body */}
      <div className="container my-3">
        <Form text="Enter Text to convert" mode={mode} showAlert={showAlert} />
      </div>

      {/* About */}
      <About />


    </>
  );
}

export default App;
