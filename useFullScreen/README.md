# @hookeasy/use-usefullscreen

React Hook to update your usefullscreen event

### install
```
npm i @hookeasy/use-usefullscreen

or

yarn add @hookeasy/use-usefullscreen
```

### example

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";
import useFullscreen from "@hookeasy/use-usefullscreen";

const App = () => {
  const sayHello = () => console.log("say Hello");

  const {triggerFull, exitFull} = usefullscreen(sayHello);

  return (
    <div className="App">
      <img ref={el} />
      <button onClick={triggerFull}>HI</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```