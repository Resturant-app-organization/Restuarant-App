import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Burgers from './Burgers';
import BurgerDescription from './Details';

function App() {
  return (
    <Router>
       <div className="App">
    <Navbar />
    <h1>Welcome to burger hub</h1>
    </div>
    <Routes>
      <Route  exact path="/burgers" element={<Burgers />}></Route>
      <Route exact path="/burger/:id" element={<BurgerDescription />}></Route>
    </Routes>
    </Router>
   
  );
}

export default App;

