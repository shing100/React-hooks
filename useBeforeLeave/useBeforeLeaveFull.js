import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useBeforeLeave = onBefore => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = event => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

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
