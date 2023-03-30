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


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path ="/" element = {<Home/>}/>
          <Route exact path ="/login" element = {<Login/>}/>
          <Route exact path ="/signup" element = {<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login">
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
