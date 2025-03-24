import React, { FC } from "react";
  import Choice from "../Choice";
  
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
        <Choice width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  