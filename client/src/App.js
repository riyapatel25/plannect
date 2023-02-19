import './App.css';
import React, { useEffect, useState } from "react";
// import Form from "./components/form"
import { PopupButton } from '@typeform/embed-react'

import { Widget } from '@typeform/embed-react'

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
   
    <main>
      <iframe src="https://platform.twitter.com/widgets/tweet_button.html"></iframe>



        <iframe 
         src="https://jpywnvxt6c4.typeform.com/to/i7hFvACI"
       ></iframe>
       
      <p>
        Similar Interests:
       {user.choices[0].text}
      </p> 

    </main>
  );

        }
export default App;
