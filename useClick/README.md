# @hookeasy/use-useClick

React Hook to update your useClick event

### install
```
npm i @hookeasy/use-useClick

or

yarn add @hookeasy/use-useClick
```

### example

```javascript
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useClick from "@hookeasy/use-click";

const App = () => {
  const sayHello = () => console.log("say Hello");

  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>HI</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```