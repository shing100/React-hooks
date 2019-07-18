# @hookeasy/use-scroll

React Hook to update your scroll event

### install
```
npm i @hookeasy/use-scroll

or

yarn add @hookeasy/use-scroll
```

### example

```javascript
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useScroll from "@hookeasy/use-scroll";

function App() {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "black" }}>
        Hello CodeSandbox
      </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```