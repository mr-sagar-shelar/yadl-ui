import React, { FC } from "react";
  import Cypress from "../Cypress";
  
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
        <Cypress width="500px" height="500px" />
      </div>
    );
  };
  
  export default Example;
  