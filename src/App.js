 
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
import SignUp from './components/SignUp';
import ShowAlertState from './context/ShowAlertProvider';

function App() {

  return (
    <>
    <NoteState>
      <ShowAlertState>
    <Router>
      <NavBar/>
      <div className="container">
      <Routes>
        {/* <Route exact path="/" element={<Login to = "/login" replace={true}/>} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
      </div>
    

    </Router>
    </ShowAlertState>
    </NoteState>
 
      </>
    
  );
}

export default App;
