# @hookeasy/use-hover

React Hook to update your hover event

### install
```
npm i @hookeasy/use-hover

or

yarn add @hookeasy/use-hover
```

### example

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";
import useHover from "@hookeasy/use-hover";

const App = () => {
  const sayHello = () => console.log("say Hello");

  const title = useHover(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>HI</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```