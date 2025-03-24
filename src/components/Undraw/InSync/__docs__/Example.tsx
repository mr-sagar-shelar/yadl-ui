import React, { FC } from "react";
  import InSync from "../InSync";
  
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
        <InSync width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  