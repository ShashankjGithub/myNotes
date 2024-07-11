import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login to = "/login" replace={true}/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>

    </Router>
 
      </>
    
  );
}

export default App;
