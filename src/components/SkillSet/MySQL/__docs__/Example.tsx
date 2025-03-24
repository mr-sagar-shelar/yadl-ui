import React, { FC } from "react";
  import MySQL from "../MySQL";
  
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
        <MySQL width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  