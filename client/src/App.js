
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './index.css';
import React, { useEffect, useState } from "react";
import Carousel from './components/Carousel'
import Connect from './components/connect'

function App() {


  const [user, setUser] = useState([]);
 

  const fetchAutoCodeData= async() => {
    return await fetch("https://riyapatel.api.stdlib.com/plannect@dev/")
          .then((response) => response.json())
          .then((data) => setUser(data));
        
  }
  useEffect(() => {
    fetchAutoCodeData();

  },[])
     return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <iframe 
        src="https://jpywnvxt6c4.typeform.com/to/i7hFvACI"
       ></iframe>

        <div className="content">
        <Profile />
        <Carousel />
        <Connect />
      
       <p>
        Similar Interests:
       {user.choices[0].text}
      </p>

      <p>Find People Near You:</p>  
      <img src="https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/static/-79.467728,43.771912,13,0,60/1200x500?access_token=pk.eyJ1Ijoicml5YXBwMjUiLCJhIjoiY2wyd2s0MnViMG1kbTNsbXZxdmdwd2RiaCJ9.OiS4eMrR0nGsrj_oaKVdmQ"></img> 

        </div>
       
       

      </header>
    </div>
  );
}

export default App;
