# @hookeasy/use-fadein

React Hook to update your fadein event

### install
```
npm i @hookeasy/use-fadein

or

yarn add @hookeasy/use-fadein
```

### example

```javascript
import React from "react";
import ReactDOM from "react-dom";
import useFadeIn from "@hookeasy/use-fadein";

const App = () => {
  const fadeInH1 = useFadeIn(3, 2);
  const fadeInP = useFadeIn(5, 5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello CodeSandbox</h1>
      <p {...fadeInP}>lorem ipsum alallala</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```