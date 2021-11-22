import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ValidationForm from "./componet/ValidationForm"
import defaultExport from 'module';
import NavigationBar from "./componet/NavigationBar"
import AboutUs from "./componet/AboutUs"
import Home from "./componet/Home"
function App() {
  return (
    <div className="App">
        
        <NavigationBar />
        <Home /> 
        <AboutUs />
        <ValidationForm />
        
    </div>
  );
}


export default App;
