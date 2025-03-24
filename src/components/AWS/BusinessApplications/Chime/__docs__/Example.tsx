import React, { FC } from "react";
  import Chime from "../Chime";
  
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
        <Chime width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  