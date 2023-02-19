
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './index.css';
import React, { useEffect, useState } from "react";
import Carousel from './components/Carousel'
import rocket from './components/images/rocket.png'

function App() {

  const [user, setUser] = useState([]);
 
  //call autocode with http webhook
  const fetchAutoCodeData= async() => {
    return await fetch("https://cristallu84.autocode.dev/plannect@dev/")
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
        <iframe className= "form"
        src="https://jpywnvxt6c4.typeform.com/to/i7hFvACI"
       ></iframe>

        <div className="content">
        <Profile />
        <Carousel />
        <div className= "Plannections" id='Plannections'>
            <h1 className="subhead">Your Plannections: </h1>
            <div className="card-content1">
            <img src={rocket} alt="" className="rocket"/>
            <h1 className="name">Kiara Smith</h1>
            <h4> Similar Interests: {user.choices[0].text} </h4>
            <h4> Proximity: 2km away </h4>
            </div>

            <div className="card-content1">
            <img src={rocket} alt="" className="rocket"/>
            <h1 className="name">Donald Duck</h1>
            <h4> Similar Interests: {user.choices[0].text}</h4>
            <h4> Proximity: 5km away </h4>
            </div> 
 
            <h1 className="subhead">Plannections Near You </h1>
            <img src="https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/static/-79.467728,43.771912,13,0,60/1200x500?access_token=pk.eyJ1Ijoicml5YXBwMjUiLCJhIjoiY2wyd2s0MnViMG1kbTNsbXZxdmdwd2RiaCJ9.OiS4eMrR0nGsrj_oaKVdmQ" alt="" className="map"></img> 
        </div> 

        </div>

       

      </header>
    </div>
  );
}

export default App;