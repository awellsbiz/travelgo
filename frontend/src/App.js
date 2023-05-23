import {useState, useEffect} from "react";
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Headers from "./components/partials/Headers";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import './App.css';
import axios from "axios";

function App() {
  const [trip, setTrip] = useState([])


  useEffect(()=>{
    axios
    .get("http://localhost:8000/api/trips/")
    .then((res) => {
      console.log(res.data)
      setTrip(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

console.log(Home)
  return (
    <Router>
      <Headers />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      
    </Router>
  );
}

export default App;
