import './App.css';

import React, { useEffect, useState } from "react";

function App() { 
 
  const [user, setUser] = useState([]);
 

  const fetchAutoCodeData= () => {
    return fetch("https://riyapatel.api.stdlib.com/plannect@dev/")
          .then((response) => response.json())
          .then((data) => setUser(data));
        
  }

  useEffect(() => {
    // fetchData();
    fetchAutoCodeData();
    

  },[])

  return (
    <main>
      <h1>User List</h1>
      <p>
       {user.object}
      </p>

    </main>
  );

        }
export default App;
