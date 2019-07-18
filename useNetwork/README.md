# @hookeasy/use-network

React Hook to update your network status event

### install
```
npm i @hookeasy/use-network

or

yarn add @hookeasy/use-network
```

### example

```javascript
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useNetwork from "@hookeasy/useNetwork";

const App = () => {
  const handleNetworkChagne = online => {
    console.log(online ? "We just went online" : "We are Offline");
  };
  const onLine = useNetwork(handleNetworkChagne);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
      <p>lorem ipsum alallala</p>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```