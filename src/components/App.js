import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [data, setData] = useState(false);
  function changeData() {
    setData(!data);
  }
  return (
    <div className="App" id="main">
      <p id="para" className={data ? "hide" : "show"}>
        {data
          ? "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          : ""}
      </p>

      <button
        id="click"
        onClick={() => changeData()}
        className={data ? "hide" : "show"}
      >
        {data ? "hide" : "show"}
      </button>
    </div>
  );
};

export default App;
