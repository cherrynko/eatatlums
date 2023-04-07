// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Contact from './screens/Contact';
import PdcHome from './screens/PdcHome';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/pdchome" element={<PdcHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
