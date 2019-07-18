# @hookeasy/use-title

React Hook to update your document's title

### install
```
npm i @hookeasy/use-title

or

yarn add @hookeasy/use-title
```

### example

```javascript
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useTitle from "@hookeasy/use-title";

const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return (
        <div className="App">
            <div>hi</div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```