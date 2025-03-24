import React, { FC } from "react";
  import Ableton from "../Ableton";
  
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
        <Ableton width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  