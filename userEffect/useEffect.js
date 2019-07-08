import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  //useEffect(sayHello, [number]);

  useEffect(sayHello, []);

  return (
    <div className="App">
      <div>hi</div>
      <button onClick={() => setNumber(number + 1)} value={number} />
      <button onClick={() => setAnumber(aNumber + 1)} value={aNumber} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
