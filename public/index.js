import React from "react";
import ReactDOM from "react-dom";
import Newsletter from "../src";

const App = () => (
  <Newsletter
    BASE_URL={"/api/dataentities/NL/documents"}
    title={"Newsletter"}
    error={"Failed to send data! :("}
    sucess={"Successful sending data"}
  />
);

ReactDOM.render(<App />, document.getElementById("root"));
