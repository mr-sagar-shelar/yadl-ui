import React, { FC } from "react";
  import Bevy from "../Bevy";
  
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
        <Bevy width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  