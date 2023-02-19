
import React from "react";
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Carousel from './components/Carousel'
import './index.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
    }, []);
    
     return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="content">
        <Profile />
        <Carousel />
        
        </div>
       
        <p>
         {!data ? "Loading...": data}
        </p>

      </header>
    </div>
  );
}

export default App;
