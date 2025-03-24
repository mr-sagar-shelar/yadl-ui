import React, { FC } from "react";
  import Keys from "../Keys";
  
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
        <Keys width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  