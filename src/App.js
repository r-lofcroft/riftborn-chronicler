import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function App() {

  const [state, setState] =
    useState(function generateRandomInt() {
      return Math.floor(Math.random() * 100);
    });
  function clickHandler(e) {
    setState(Math.floor(Math.random() * 100));
  }


  return (
    <div className="App">
      <h1>Chronicler</h1>
      <h2>The adventures of the Riftborn Six.</h2>
      <Button variant="secondary" onClick={clickHandler}>{state}</Button>
    </div>
  );
}

export default App;
