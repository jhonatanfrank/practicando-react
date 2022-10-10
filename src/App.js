import Welcome from "./components/Welcome"
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact"
import AboutMe from "./pages/AboutMe"
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome
          mensaje="Saludos desde props WELCOME"
          nombre="Frank Jhonatan Chancafe Miramira"
        />
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/aboutMe">Sobre Mi</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
