# @hookeasy/use-beforeleave

React Hook to update your useBeforeLeave event

### install
```
npm i @hookeasy/use-useBeforeLeave

or

yarn add @hookeasy/use-useBeforeLeave
```

### example

```javascript
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useBeforeLeave from "@hookeasy/use-beforeleave";

function App() {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```