import './App.css';
import HomePage from './components/HomePage';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <HomePage/>
    <Routes>
      {/* <Route exact path="/" element={<HomePage/>}></Route> */}
      <Route exact path="/about" element={<About/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
