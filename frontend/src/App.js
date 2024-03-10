// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  const handleSendData = () => {
    // Send data to the server
    console.log('Input text:', inputText)
    console.log('Sending data to server...')
    // send data
    try {
      postData("http://localhost:5000/send-data", { message: inputText }).then((data) => {
        console.log(data.response); // JSON data parsed by `data.json()` call
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Send Data to Server</h1>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Enter text to send" 
      />
      <button onClick={handleSendData}>Send</button>
    </div>
  );
}

export default App;
