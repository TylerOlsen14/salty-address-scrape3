import React from 'react';
import './App.css';
import array from './address.json'
console.log(array)

function App() {
  return (
    <div className="App">
      {array.map( scrape => (
        <h1>{scrape.name}</h1>
      ))}
    </div>
  );
}

export default App;
