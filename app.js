import React, {useState} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  console.log(input);

  const sendMessage = (event) => {
    // all the logic to send a message goes here
  }

  return (
    <div className="App">
      <h1> Hello Clever Programmers</h1>

      <input value={input} onChange={event => setInput(event.target.value)} />
      <button> Send Message</button>
    </div>
    

  );
}

export default App;
