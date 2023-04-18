import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Home from './screens/Home/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Eatery from './screens/Eateries/Eateries';
const { Outlet } = require("react-router-dom")



const Protectedroutes= ()=>{
  console.log(localStorage.getItem("auth_token"))
  return (  localStorage.getItem("auth_token") ? <Outlet/> : <Login/>)
}

function App() {
  return (
    <Router>
       <Navbar/>
        <Routes>
          <Route exact path ="/login" element = {<Login/>}/>
          <Route exact path ="/signup" element = {<Signup/>}/>
          <Route exact path ="/eateries" element = {<Eatery/>}/>

        {/* add protected Routes here */}

        <Route element= {<Protectedroutes/>}> 
          <Route exact path ="/" element = {<Home/>}/>
        </Route>
        </Routes>

    </Router>
  );
}

export default App;
