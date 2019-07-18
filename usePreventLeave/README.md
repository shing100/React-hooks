# @hookeasy/use-preventleave

React Hook to update your preventleave event

### install
```
npm i @hookeasy/use-preventleave

or

yarn add @hookeasy/use-preventleave
```

### example

```javascript
import React from "react";
import ReactDOM from "react-dom";
import usePreventLeave from "@hookeasy/use-preventleave";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
        <button onClick={enablePrevent}>protect</button>
        <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```