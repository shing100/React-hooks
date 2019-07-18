# @hookeasy/use-useInput

React Hook to update your useInput

### install
```
npm i @hookeasy/use-useInput

or

yarn add @hookeasy/use-useInput
```

### example

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInput from "@hookeasy/use-input";

function App() {
  const maxLen = value => value.length < 10;
  const name = useInput("Mr. ", maxLen);

  return (
    <div className="App">
      <input placeholder="Name" {...name} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```