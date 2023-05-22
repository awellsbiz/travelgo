import {useState, useEffect} from "react";
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


  return (
    <div>
      <h1>Here I am</h1>
      <p> </p>
      
    </div>
  );
}

export default App;
