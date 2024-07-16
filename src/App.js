 
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/NotesProvider';

function App() {

  return (
    <>
    <NoteState>
    <Router>
      <NavBar/>
      <div className="container">
      <Routes>
        {/* <Route exact path="/" element={<Login to = "/login" replace={true}/>} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
    

    </Router>
    </NoteState>
 
      </>
    
  );
}

export default App;
