# @hookeasy/use-confirm

React Hook to update your confirm event

### install
```
npm i @hookeasy/use-confirm

or

yarn add @hookeasy/use-confirm
```

### example

```javascript
import React from "react";
import ReactDOM from "react-dom";
import useConfirm from "@hookeasy/use-confirm";

const App = () => {
  const deleteWorld = () => console.log("Deleting the word");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```