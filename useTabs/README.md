# @hookeasy/use-tabs

React Hook to help your tabs controller

### install
```
npm i @hookeasy/use-tabs

or

yarn add @hookeasy/use-tabs
```

### example

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";
import useTabs from "@hookeasy/use-tabs";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];

function App() {
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <div className="App">
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```