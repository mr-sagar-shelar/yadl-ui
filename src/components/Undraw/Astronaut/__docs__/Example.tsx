import React, { FC } from "react";
  import Astronaut from "../Astronaut";
  
  const Example = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Astronaut width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  