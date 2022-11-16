import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Dashboard from "./Container/Components/Dashboard";
import Navbar from './Container/Components/Navbar';
import Products from "./Container/Components/Products";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      {/* <Products/> */}
      {/* <Dashboard/> */}
      <Routes>


 <Route exact path='*' element={<Dashboard />}/>
      <Route exact path='/product' element={<Products />}/>
   
   
    </Routes>
  
    </Router>
    </div>
  );
}

export default App;
