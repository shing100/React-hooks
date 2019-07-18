# @hookeasy/use-use-axios

React Hook to update your useAxios event

### install
```
npm i @hookeasy/use-useAxios

or

yarn add @hookeasy/use-useAxios
```

### example

```javascript
import React from "react";
import ReactDOM from "react-dom";
import useAxios from "@hookeasy/use-axios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.lt/api/v2/list_movies.json"
  });

  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading & "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```