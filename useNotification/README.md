# @hookeasy/use-notification

React Hook to update your notification event

### install
```
npm i @hookeasy/use-notification

or

yarn add @hookeasy/use-notification
```

### example

```javascript
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useNotification from "@hookeasy/use-notification";

const App = () => {
  const triggerNotif = useNotification("hello guys", {
    body: "goood!!"
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


```