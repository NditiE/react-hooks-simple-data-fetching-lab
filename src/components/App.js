// create your App component here
import React, { useState, useEffect } from 'react';



function App() {
  const [dogImage, setDogImage] = useState(null);

  
  useEffect(() => {
    // Send a fetch request to the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update the dogImage state with the received image URL
        setDogImage(data.message);
      });
  }, []);

  
  
  return (
    <div>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}



export default App;