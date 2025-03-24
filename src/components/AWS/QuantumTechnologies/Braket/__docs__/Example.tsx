import React, { FC } from "react";
  import Braket from "../Braket";
  
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
        <Braket width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  