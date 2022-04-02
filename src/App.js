import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';


function App() {
  return (
    <>
      <Navbar title="CLoud Kitchen" explore="Explore" order="Order Now" />

      <div className="container my-3">
        <Form text="Enter Text to convert" />
      </div>
    
    </>
  );
}

export default App;
