import React from "react";
import Image from "./image.png";

function App() {
  return (
    <div>
      <center>
        <img src={Image} alt="Logo" height="120" width="320" /> <br/> <br/>
        <a href={Image} download="Logo" >Click here to download</a>
      </center>
    </div>
  );
}

export default App;
