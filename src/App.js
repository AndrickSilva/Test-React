import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';


function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar title="CLoud Kitchen" explore="Explore" order="Order Now" />

      {/* body */}
      <div className="container my-3">
        <Form text="Enter Text to convert" />
      </div>

      {/* About */}
      <About />

      
    </>
  );
}

export default App;
