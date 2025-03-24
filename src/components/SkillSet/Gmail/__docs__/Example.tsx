import React, { FC } from "react";
  import Gmail from "../Gmail";
  
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
        <Gmail width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  